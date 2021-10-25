import React, { Fragment, useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

import AddSprint from "./AddSprint";
import AddJob from "./AddJob";

const Sprint = () => {
  ///////////////////////////////////////////////////////////////////
  const [sprints, setSprints] = useState([]);
  const [viewSprints, setViewSprints] = useState(true);

  const [sprintDetails, setSprintDetails] = useState();
  const [viewSprintDetails, setViewSprintDetails] = useState(false);

  const [addSprintIsShown, setAddSprintIsShown] = useState(false);
  const [refreshSprints, setRefreshSprintList] = useState(false);

  ///////////////////////////////////////////////////////////////////
  const [actSprintID, setActSprintID] = useState([]);
  const [jobs, setJobs] = useState([]);

  const [jobDetails, setJobDetails] = useState();
  const [viewJobDetails, setViewJobDetails] = useState(false);

  const [addJobIsShown, setAddJobIsShown] = useState(false);
  const [refreshJobs, setRefreshJobList] = useState(false);

  ///////////////////////////////////////////////////////////////////
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  ///////////////////////////////////////////////////////////////////
  const fetchSprints = async () => {
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
      a.SprintName > b.SprintName ? 1 : -1
    );
    setSprints(loadedSprints);
    setIsLoading(false);
  };

  ///////////////////////////////////////////////////////////////////
  const fetchJobs = async () => {
    const payload = {
      operation: "list",
      payload: {
        TableName: "JOB_TBL",
        FilterExpression: "SprintID = :sd",
        ExpressionAttributeValues: {
          ":sd": actSprintID,
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
    setIsLoading(false);
  };

  ///////////////////////////////////////////////////////////////////
  useEffect(() => {
    fetchSprints().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
    setRefreshSprintList(false);
  }, [refreshSprints]);

  ///////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (actSprintID !== undefined) {
      fetchJobs().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
      setRefreshJobList(false);
    }
  }, [refreshJobs, actSprintID]);

  ///////////////////////////////////////////////////////////////////
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  ///////////////////////////////////////////////////////////////////
  const addSprintHandler = () => {
    setAddSprintIsShown(true);
  };

  const hideSprintHandler = () => {
    setAddSprintIsShown(false);
  };

  const refreshSprintList = (isRefresh) => {
    if (isRefresh) {
      setRefreshSprintList(true);
    }
    setAddSprintIsShown(false);
  };

  const viewSprintDetailsHandler = (passedValue) => {
    setViewSprints(false);
    setViewSprintDetails(true);
    setViewJobDetails(false);
    setSprintDetails(passedValue);
    setActSprintID(passedValue.SprintID);
    setIsLoading(true);
    // fetchJobs().catch((error) => {
    //   setIsLoading(false);
    //   setHttpError(error.message);
    // });
  };

  const viewSprintsHandler = () => {
    setViewSprints(true);
    setViewSprintDetails(false);
    setViewJobDetails(false);
  };

  ///////////////////////////////////////////////////////////////////
  const addJobHandler = () => {
    setAddJobIsShown(true);
  };

  const hideJobHandler = () => {
    setAddJobIsShown(false);
  };

  const refreshJobList = (isRefresh) => {
    if (isRefresh) {
      setRefreshJobList(true);
    }
    setAddJobIsShown(false);
  };

  const viewJobDetailsHandler = (passedValue) => {
    setViewSprints(false);
    setViewSprintDetails(false);
    setViewJobDetails(true);
    setJobDetails(passedValue);
  };

  ///////////////////////////////////////////////////////////////////

  return (
    <section>
      {addSprintIsShown && (
        <AddSprint
          onClose={hideSprintHandler}
          isSuccess={refreshSprintList}
          latestSprint={sprints.at(-1)}
        />
      )}
      {addJobIsShown && (
        <AddJob
          onClose={hideJobHandler}
          isSuccess={refreshJobList}
          sprintID={actSprintID}
        />
      )}
      {viewSprints && (
        <Fragment>
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
          <h1>Sprint Jobs</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Job ID</th>
                <th>Job Name</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr>
                  <td>{job.JobID}</td>
                  <td>{job.JobName}</td>
                  <td>{job.StartDate}</td>
                  <td>{job.EndDate}</td>
                  <td scope="col" align="center">
                    <Button
                      variant="info"
                      // onClick={() => viewSprintDetailsHandler(sprint)}
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
