import React, { Fragment, useEffect, useState } from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import { Auth } from "aws-amplify";
import {
  CognitoIdentityProviderClient,
  ListUsersCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import ViewTimesheet from "./ViewTimesheet";

const Manage = () => {
  const [users, setUsers] = useState([]);
  const [userEmail, setUserEmail] = useState();
  const [otherEmail, setOtherEmail] = useState("No select");
  const [timesheets, setTimesheets] = useState([]);
  const [refreshTS, setRefreshTS] = useState(1);
  const [viewTS, setViewTS] = useState(false);
  const [targetTS, setTargetTS] = useState();
  const [admin, setAdmin] = useState(false);

  ///////////////////////////////////////////////////////////////////
  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    let user = await Auth.currentAuthenticatedUser();
    let groups = user.signInUserSession.accessToken.payload["cognito:groups"];
    console.log("user", user);
    console.log("attributes", user.attributes);
    console.log("groups", groups);
    setUserEmail(user.attributes.email);
    if (groups != undefined && groups.includes("Administrator")) {
      setAdmin(true);
    }
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
          if (attr.Name == "email" && attr.Value != userEmail) {
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
    if (otherEmail != undefined) {
      fetchTimesheet().catch((error) => {
        console.log(error.message);
      });
    }
  }, [refreshTS, otherEmail]);

  const fetchTimesheet = async () => {
    const payload = {
      operation: "list",
      payload: {
        TableName: "Timesheet",
        FilterExpression: "emailID = :sd",
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
    console.log(responseData);

    let loaded = responseData.Items;
    loaded = loaded.sort((a, b) =>
      parseInt(a.rd_year) > parseInt(b.rd_year) &&
      parseInt(a.rd_month) > parseInt(b.rd_month)
        ? 1
        : -1
    );

    setTimesheets(loaded);
  };

  ///////////////////////////////////////////////////////////////////

  const viewTimesheet = (passedValue) => {
    setTargetTS(passedValue);
    setViewTS(true);
  };

  const hideViewFormHandler = () => {
    setViewTS(false);
  };

  const emailChangeHandler = (event) => {
    setOtherEmail(event.target.value);
  };

  const refreshTSL = () => {
    setRefreshTS(refreshTS + 1);
  };

  const refreshTSList = (isRefresh) => {
    setRefreshTS(refreshTS + 1);
    hideViewFormHandler();
  };

  return (
    <section>
      {admin && (
        <Fragment>
          <br></br>
          <br></br>
          <br></br>
          <h5>Your email: {userEmail}</h5>
          <br></br>
          <br></br>
          <h5>Manage others' timesheets</h5>
          {viewTS && (
            <ViewTimesheet
              onClose={hideViewFormHandler}
              isSuccess={refreshTSList}
              ts={targetTS}
              admin={true}
            />
          )}
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
              <br></br>
              <h1>
                {otherEmail} - Submitted timesheets:{" "}
                <Button variant="outline-dark" onClick={refreshTSL}>
                  Refresh
                </Button>
              </h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Record ID</th>
                    <th>Month</th>
                    <th>Year</th>
                    <th>Record Status</th>
                  </tr>
                </thead>
                <tbody>
                  {timesheets.map((ts) => (
                    <tr>
                      <td>{ts.rd_id}</td>
                      <td>{ts.rd_month}</td>
                      <td>{ts.rd_year}</td>
                      <td>{ts.rd_status}</td>
                      <td scope="col" align="center">
                        <Button
                          variant="info"
                          onClick={() => viewTimesheet(ts)}
                        >
                          View/Manage
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Fragment>
          )}
        </Fragment>
      )}
    </section>
  );
};

export default Manage;
