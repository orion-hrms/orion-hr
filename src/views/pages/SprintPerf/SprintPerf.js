import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { CChartBar, CChartPie, CChart } from "@coreui/react-chartjs";
import { Auth } from "aws-amplify";
import {
  CognitoIdentityProviderClient,
  ListUsersCommand,
} from "@aws-sdk/client-cognito-identity-provider";

const SprintPerf = () => {
  let date = new Date();
  const [userJobs, setUserJobs] = useState([]);
  const [userEmail, setUserEmail] = useState();

  const [users, setUsers] = useState([]);
  const [otherJobs, setOtherJobs] = useState([]);
  const [otherEmail, setOtherEmail] = useState("No select");
  const [viewPerf, setVP] = useState(false);

  const [inD, setInD] = useState([]);
  const [cmD, setCmD] = useState([]);
  const [cpD, setCpD] = useState([]);
  const [inS, setInS] = useState();
  const [cmS, setCmS] = useState();

  const [oinD, setOInD] = useState([]);
  const [ocmD, setOCmD] = useState([]);
  const [ocpD, setOCpD] = useState([]);
  const [oinS, setOInS] = useState();
  const [ocmS, setOCmS] = useState();

  ///////////////////////////////////////////////////////////////////
  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    let user = await Auth.currentAuthenticatedUser();
    console.log("user", user);
    console.log("attributes", user.attributes);
    setUserEmail(user.attributes.email);
  };

  console.log("User Email: " + userEmail);
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

  useEffect(() => {
    getUsersList();
  }, []);

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

  useEffect(() => {
    fetchUserJobs().catch((error) => {
      console.log(error.message);
    });
    console.log("userEmail effect");
  }, [userEmail]);

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

  useEffect(() => {
    if (otherEmail != "Unassigned" || otherEmail != undefined) {
      fetchOtherJobs().catch((error) => {
        console.log(error.message);
      });
    }
    console.log("otherEmail effect");
  }, [otherEmail]);

  const fetchOtherJobs = async () => {
    console.log("Fetch Other Jobs 1");
    setOtherJobs([]);
    const payload = {
      operation: "list",
      payload: {
        TableName: "JOB_TBL",
        FilterExpression: "OwnerEmail = :sd",
        ExpressionAttributeValues: {
          ":sd": otherEmail,
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
    setOtherJobs(loadedJobs);
    console.log("Fetch Other Jobs 2");
  };

  ///////////////////////////////////////////////////////////////////

  useEffect(() => {
    calculateScore(userJobs);
  }, [userJobs]);

  const calculateScore = (jobs) => {
    let incompleteScores = new Array(12).fill(0);
    let completeScores = new Array(12).fill(0);
    let compareScores = new Array(2).fill(0);
    let tis = 0;
    let tcs = 0;
    jobs.map((job) => {
      let jobDate = new Date(job.StartDate);
      let year = jobDate.getFullYear();
      let month = jobDate.getMonth();
      if (year == date.getFullYear()) {
        if (job.JobStatus == "Completed") {
          completeScores[month] =
            parseInt(completeScores[month]) + parseInt(job.Score);
          tcs = tcs + parseInt(job.Score);
        } else {
          incompleteScores[month] =
            parseInt(incompleteScores[month]) + parseInt(job.Score);
          tis = tis + parseInt(job.Score);
        }
      }

      if (job.JobStatus == "Completed") {
        compareScores[1] = parseInt(compareScores[1]) + 1;
      } else {
        compareScores[0] = parseInt(compareScores[0]) + 1;
      }
      return;
    });
    setInD(incompleteScores);
    setCmD(completeScores);
    setCpD(compareScores);
    setInS(tis);
    setCmS(tcs);
  };

  ///////////////////////////////////////////////////////////////////

  useEffect(() => {
    calculateOScore(otherJobs);
  }, [otherJobs]);

  const calculateOScore = (jobs) => {
    let incompleteScores = new Array(12).fill(0);
    let completeScores = new Array(12).fill(0);
    let compareScores = new Array(2).fill(0);
    let tis = 0;
    let tcs = 0;
    jobs.map((job) => {
      let jobDate = new Date(job.StartDate);
      let year = jobDate.getFullYear();
      let month = jobDate.getMonth();
      if (year == date.getFullYear()) {
        if (job.JobStatus == "Completed") {
          completeScores[month] =
            parseInt(completeScores[month]) + parseInt(job.Score);
          tcs = tcs + parseInt(job.Score);
        } else {
          incompleteScores[month] =
            parseInt(incompleteScores[month]) + parseInt(job.Score);
          tis = tis + parseInt(job.Score);
        }
      }

      if (job.JobStatus == "Completed") {
        compareScores[1] = parseInt(compareScores[1]) + 1;
      } else {
        compareScores[0] = parseInt(compareScores[0]) + 1;
      }
      return;
    });
    setOInD(incompleteScores);
    setOCmD(completeScores);
    setOCpD(compareScores);
    setOInS(tis);
    setOCmS(tcs);
  };

  ///////////////////////////////////////////////////////////////////

  const emailChangeHandler = (event) => {
    setOtherEmail(event.target.value);
  };

  return (
    <section>
      <h5>Your email: {userEmail}</h5>
      <br></br>
      <h3>Your Sprint performance of year {date.getFullYear().toString()}</h3>
      <CChartBar
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "Incomplete Score",
              backgroundColor: "red",
              data: inD,
            },
            {
              label: "Complete Score",
              backgroundColor: "blue",
              data: cmD,
            },
          ],
        }}
        labels="months"
      />
      <br></br>
      <b>Your total score for imcomplete job is {inS}</b>
      <br></br>
      <b>Your total score for complete job is {cmS}</b>
      <br></br>
      <br></br>
      <h3>Your Incomplete Jobs vs Complete Jobs</h3>
      <div className="row">
        <div className="col-md-4">
          <CChartPie
            data={{
              labels: ["Incomplete Jobs", "Complete Jobs"],
              datasets: [
                {
                  data: cpD,
                  backgroundColor: ["Red", "Blue"],
                  hoverBackgroundColor: ["Red", "Blue"],
                },
              ],
            }}
          />
          <hr />
        </div>
      </div>
      <br></br>
      <br></br>
      <h5>View other performance</h5>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Other Email</Form.Label>
            <Form.Select
              htmlSize="5"
              required
              onChange={emailChangeHandler}
              defaultValue="No select"
            >
              <option>No select</option>
              {users.map((user) => (
                <option>{user}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col}></Form.Group>
        </Row>
      </Form>
      {otherEmail != undefined && (
        <Fragment>
          <br></br>
          <h3>
            {otherEmail} Sprint performance of year{" "}
            {date.getFullYear().toString()}
          </h3>
          <CChartBar
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              datasets: [
                {
                  label: "Incomplete Score",
                  backgroundColor: "red",
                  data: oinD,
                },
                {
                  label: "Complete Score",
                  backgroundColor: "blue",
                  data: ocmD,
                },
              ],
            }}
            labels="months"
          />
          <br></br>
          <b>{otherEmail} total score for imcomplete job is {oinS}</b>
          <br></br>
          <b>{otherEmail} total score for complete job is {ocmS}</b>
          <br></br>
          <br></br>
          <h3>{otherEmail} Incomplete Jobs vs Complete Jobs</h3>
          <div className="row">
            <div className="col-md-4">
              <CChartPie
                data={{
                  labels: ["Incomplete Jobs", "Complete Jobs"],
                  datasets: [
                    {
                      data: ocpD,
                      backgroundColor: ["Red", "Blue"],
                      hoverBackgroundColor: ["Red", "Blue"],
                    },
                  ],
                }}
              />
              <hr />
            </div>
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default SprintPerf;
