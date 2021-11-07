import React, { Fragment, useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

import uuid from "react-uuid";
import AddJob from "./AddJob";
import ViewJob from "./ViewJob";
import { Auth } from "aws-amplify";
import {
  CognitoIdentityProviderClient,
  ListUsersCommand,
} from "@aws-sdk/client-cognito-identity-provider";

const Sprint = () => {
  const [userEmail, setUserEmail] = useState();
  const [users, setUsers] = useState([]);
  ///////////////////////////////////////////////////////////////////
  const [sprints, setSprints] = useState([]);
  const [viewSprints, setViewSprints] = useState(true);

  const [sprintDetails, setSprintDetails] = useState();
  const [viewSprintDetails, setViewSprintDetails] = useState(false);
  const [refreshSprints, setRefreshSprints] = useState("1");

  ///////////////////////////////////////////////////////////////////
  const [jobs, setJobs] = useState([]);
  const [userJobs, setUserJobs] = useState([]);

  const [jobDetails, setJobDetails] = useState();
  const [viewJobDetails, setViewJobDetails] = useState(false);

  const [addJobIsShown, setAddJobIsShown] = useState(false);
  const [refreshJobs, setRefreshJobList] = useState("1");

  ///////////////////////////////////////////////////////////////////
  const client = new CognitoIdentityProviderClient({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.REACT_APP_ACK,
      secretAccessKey: process.env.REACT_APP_SEK,
    },
  });

  const command = new ListUsersCommand({
    UserPoolId: process.env.REACT_APP_UPI,
  });

  ///////////////////////////////////////////////////////////////////
  useEffect(() => {
    getCurrentUser();
  }, []);
  console.log("User Email: " + userEmail);

  useEffect(() => {
    fetchUserJobs().catch((error) => {
      console.log(error.message);
    });
    console.log("userEmail effect");
  }, [userEmail]);

  useEffect(() => {
    fetchSprints().catch((error) => {
      console.log(error.message);
    });
  }, [refreshSprints]);

  useEffect(() => {
    console.log("sprintDetails effect 1");
    console.log(sprintDetails);
    if (sprintDetails !== undefined && sprintDetails.SprintID !== undefined) {
      fetchJobs().catch((error) => {
        console.log(error.message);
      });
    }
    console.log("sprintDetails effect 2");
  }, [sprintDetails]);

  useEffect(() => {
    console.log("refreshJobs effect 1");
    console.log(sprintDetails);
    if (sprintDetails !== undefined && sprintDetails.SprintID !== undefined) {
      fetchJobs().catch((error) => {
        console.log(error.message);
      });
    }
    fetchUserJobs().catch((error) => {
      console.log(error.message);
    });
    console.log("refreshJobs effect 2");
  }, [refreshJobs]);

  useEffect(() => {
    getUsersList();
  }, []);

  ///////////////////////////////////////////////////////////////////
  const getCurrentUser = async () => {
    let user = await Auth.currentAuthenticatedUser();
    console.log("user", user);
    console.log("attributes", user.attributes);
    setUserEmail(user.attributes.email);
  };

  ///////////////////////////////////////////////////////////////////
  const fetchSprints = async () => {
    console.log("Fetch Sprint 1");
    const payload = {
      operation: "list",
      payload: {
        TableName: "SPRINT_TBL",
      },
    };

    const response = await fetch(
      "https://de0grvoj8l.execute-api.us-east-2.amazonaws.com/dev/hr-performance-tracking",
      {
        method: "POST",
        body: JSON.stringify(payload),
        // headers: {
        //   'Content-Type': 'application/json',
        //   'Accept': '*'
        // }
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const responseData = await response.json();
    let loadedSprints = responseData.Items;
    loadedSprints = loadedSprints.sort((a, b) =>
      parseInt(a.SprintName.split("#")[1]) >
      parseInt(b.SprintName.split("#")[1])
        ? 1
        : -1
    );
    setSprints(loadedSprints);
    console.log("Fetch Sprint 2");
  };

  ///////////////////////////////////////////////////////////////////
  const fetchJobs = async () => {
    console.log("Fetch Jobs 1");
    const payload = {
      operation: "list",
      payload: {
        TableName: "JOB_TBL",
        FilterExpression: "SprintID = :sd",
        ExpressionAttributeValues: {
          ":sd": sprintDetails.SprintID,
        },
      },
    };

    const response = await fetch(
      "https://de0grvoj8l.execute-api.us-east-2.amazonaws.com/dev/hr-performance-tracking",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const responseData = await response.json();
    let loadedJobs = responseData.Items;
    loadedJobs = loadedJobs.sort((a, b) => (a.JobID > b.JobID ? 1 : -1));
    setJobs(loadedJobs);
    console.log("Fetch Jobs 2");
  };

  ///////////////////////////////////////////////////////////////////
  const fetchUserJobs = async () => {
    console.log("Fetch User Jobs 1");
    setUserJobs([]);
    const payload = {
      operation: "list",
      payload: {
        TableName: "JOB_TBL",
        FilterExpression: "OwnerEmail = :sd",
        ExpressionAttributeValues: {
          ":sd": userEmail,
        },
      },
    };

    const response = await fetch(
      "https://de0grvoj8l.execute-api.us-east-2.amazonaws.com/dev/hr-performance-tracking",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const responseData = await response.json();
    let loadedJobs = responseData.Items;
    loadedJobs = loadedJobs.sort((a, b) => (a.JobID > b.JobID ? 1 : -1));
    loadedJobs = loadedJobs.sort((a, b) =>
      a.StartDate > b.StartDate ? 1 : -1
    );
    setUserJobs(loadedJobs);
    console.log("Fetch User Jobs 2");
  };

  ///////////////////////////////////////////////////////////////////
  const getUsersList = async () => {
    try {
      const data = await client.send(command);
      let emails = new Set();
      data.Users.map((user) =>
        user.Attributes.map((attr) => {
          if (attr.Name == "email") {
            emails.add(attr.Value);
          }

          return;
        })
      );
      setUsers(Array.from(emails));
    } catch (error) {
      console.error(error);
    }
  };

  ///////////////////////////////////////////////////////////////////
  const addSprintHandler = async () => {
    console.log("Add Sprint 1");
    await fetchSprints().catch((error) => {
      console.log(error.message);
    });
    console.log("Add Sprint 2");

    const sprintID = uuid();
    let sprintName;
    let startDate;
    let endDate;

    if (sprints.at(-1) !== undefined) {
      let spintCount = parseInt(sprints.at(-1).SprintName.split("#")[1]) + 1;
      sprintName = "Sprint#" + spintCount;
      let date = new Date(sprints.at(-1).StartDate);
      startDate = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        1
      ).toLocaleDateString();
      endDate = new Date(
        date.getFullYear(),
        date.getMonth() + 2,
        0
      ).toLocaleDateString();
    } else {
      sprintName = "Sprint#1";
      let date = new Date();
      startDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
      ).toLocaleDateString();
      endDate = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).toLocaleDateString();
    }

    console.log(sprintName);
    console.log(startDate);
    console.log(endDate);

    const addSprint = async () => {
      const payload = {
        operation: "update",
        payload: {
          TableName: "SPRINT_TBL",
          Key: {
            SprintID: sprintID,
          },
          UpdateExpression: "set SprintName =:sn, StartDate =:sd, EndDate =:ed",
          ExpressionAttributeValues: {
            ":sn": sprintName,
            ":sd": startDate,
            ":ed": endDate,
          },
          ReturnValues: "ALL_NEW",
        },
      };

      const response = await fetch(
        "https://de0grvoj8l.execute-api.us-east-2.amazonaws.com/dev/hr-performance-tracking",
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      console.log(responseData);
    };

    console.log("Add Sprint 3");
    await addSprint().catch((error) => {
      console.log(error.message);
    });
    console.log("Add Sprint 4");

    await fetchSprints().catch((error) => {
      console.log(error.message);
    });
    console.log("Add Sprint 5");
  };

  const viewSprintDetailsHandler = (passedValue) => {
    setViewSprints(false);
    setViewSprintDetails(true);
    setSprintDetails(passedValue);
  };

  const viewSprintsHandler = () => {
    setViewSprints(true);
    setViewSprintDetails(false);
  };

  ///////////////////////////////////////////////////////////////////
  const addJobHandler = () => {
    setAddJobIsShown(true);
  };

  const hideJobHandler = () => {
    setAddJobIsShown(false);
  };

  const hideViewJobHandler = () => {
    setViewJobDetails(false);
  };

  const refreshJobList = (isRefresh) => {
    if (isRefresh) {
      setRefreshJobList(refreshJobs + 1);
    }
    setAddJobIsShown(false);
    setViewJobDetails(false);
  };

  const viewJobDetailsHandler = (passedValue) => {
    setViewJobDetails(true);
    setJobDetails(passedValue);
  };

  const refreshJL = () => {
    setRefreshJobList(refreshJobs + 1);
  };

  const refreshSL = () => {
    setRefreshSprints(refreshSprints + 1);
  };

  ///////////////////////////////////////////////////////////////////






  ///////////////////////////////////////////////////////////////////
  console.log("refreshJobs " + refreshJobs);
  console.log("Users: " + users);

  return (
    <section>
      <h5>Your email: {userEmail}</h5>
      {addJobIsShown && (
        <AddJob
          onClose={hideJobHandler}
          isSuccess={refreshJobList}
          sprint={sprintDetails}
          usersList={users}
        />
      )}
      {viewJobDetails && (
        <ViewJob
          onClose={hideViewJobHandler}
          isSuccess={refreshJobList}
          job={jobDetails}
          usersList={users}
        />
      )}
      {viewSprints && (
        <Fragment>
          <h1>
            Your assigned jobs:{" "}
            <Button variant="outline-dark" onClick={refreshJL}>
              Refresh
            </Button>
          </h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Job ID</th>
                <th>Job Name</th>
                <th>Owner Email</th>
                <th>Job Status</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {userJobs.map((job) => (
                <tr>
                  <td>{job.JobID}</td>
                  <td>{job.JobName}</td>
                  <td>{job.OwnerEmail}</td>
                  <td>{job.JobStatus}</td>
                  <td>{job.StartDate}</td>
                  <td>{job.EndDate}</td>
                  <td scope="col" align="center">
                    <Button
                      variant="info"
                      onClick={() => viewJobDetailsHandler(job)}
                    >
                      View/Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h1>
            Sprints List: <Button variant="outline-dark" onClick={refreshSL}>Refresh</Button>
          </h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sprint ID</th>
                <th>Sprint Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sprints.map((sprint) => (
                <tr>
                  <td>{sprint.SprintID}</td>
                  <td>{sprint.SprintName}</td>
                  <td>{sprint.StartDate}</td>
                  <td>{sprint.EndDate}</td>
                  <td scope="col" align="center">
                    <Button
                      variant="info"
                      onClick={() => viewSprintDetailsHandler(sprint)}
                    >
                      View/Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="primary" onClick={addSprintHandler}>
            Add Sprint
          </Button>
        </Fragment>
      )}
      {viewSprintDetails && (
        <Fragment>
          <h1>Sprint Details</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sprint ID</th>
                <th>Sprint Name</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{sprintDetails.SprintID}</td>
                <td>{sprintDetails.SprintName}</td>
                <td>{sprintDetails.StartDate}</td>
                <td>{sprintDetails.EndDate}</td>
              </tr>
            </tbody>
          </Table>
          <h1>
            Sprint Jobs{" "}
            <Button variant="outline-dark" onClick={refreshJL}>
              Refresh
            </Button>
          </h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Job ID</th>
                <th>Job Name</th>
                <th>Owner Email</th>
                <th>Job Status</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr>
                  <td>{job.JobID}</td>
                  <td>{job.JobName}</td>
                  <td>{job.OwnerEmail}</td>
                  <td>{job.JobStatus}</td>
                  <td>{job.StartDate}</td>
                  <td>{job.EndDate}</td>
                  <td scope="col" align="center">
                    <Button
                      variant="info"
                      onClick={() => viewJobDetailsHandler(job)}
                    >
                      View/Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="info" onClick={viewSprintsHandler}>
            Back
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="primary" onClick={addJobHandler}>
            Add Job
          </Button>
        </Fragment>
      )}
    </section>
  );
};

export default Sprint;
