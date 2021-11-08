import React, { Fragment, useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import SubmitTimesheet from "./SubmitTimesheet";
import ViewTimesheet from "./ViewTimesheet";
import EditTimesheet from "./EditTimesheet";

const ListTimesheet = (props) => {
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [refreshTS, setRefreshTS] = useState(1);
  const [pendingTS, setPending] = useState([]);
  const [approvedTS, setApproved] = useState([]);
  const [targetTS, setTargetTS] = useState();
  const [viewTS, setViewTS] = useState(false);
  const [editTS, setEditTS] = useState(false);

  useEffect(() => {
    if (props.userEmail != undefined) {
      fetchTimesheet().catch((error) => {
        console.log(error.message);
      });
    }
  }, [refreshTS, props.userEmail]);

  const fetchTimesheet = async () => {
    const payload = {
      operation: "list",
      payload: {
        TableName: "Timesheet",
        FilterExpression: "emailID = :sd",
        ExpressionAttributeValues: {
          ":sd": props.userEmail,
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

    let loadedSprints = responseData.Items;
    loadedSprints = loadedSprints.sort((a, b) =>
      parseInt(a.rd_year) > parseInt(b.rd_year) &&
      parseInt(a.rd_month) > parseInt(b.rd_month)
        ? 1
        : -1
    );

    let a = [];
    let p = [];
    loadedSprints.map((ts) => {
      if (ts.rd_status != "Approved") {
        p.push(ts);
      } else {
        a.push(ts);
      }
    });
    setPending(p);
    setApproved(a);
  };

  const submitTimesheetHandler = () => {
    setShowSubmitForm(true);
  };

  const hideSubmitFormHandler = () => {
    setShowSubmitForm(false);
  };

  const refreshTSList = (isRefresh) => {
    setRefreshTS(refreshTS + 1);
    hideSubmitFormHandler();
    hideEditFormHandler();
  };

  const refreshTSL = () => {
    setRefreshTS(refreshTS + 1);
  };

  const viewTimesheet = (passedValue) => {
    setTargetTS(passedValue);
    setViewTS(true);
  };

  const hideViewFormHandler = () => {
    setViewTS(false);
  };

  const editTimesheet = (passedValue) => {
    setTargetTS(passedValue);
    setEditTS(true);
  };

  const hideEditFormHandler = () => {
    setEditTS(false);
  };

  return (
    <section>
      <br></br>
      <br></br>
      <br></br>
      <h5>Your email: {props.userEmail}</h5>
      <br></br>
      {showSubmitForm && (
        <SubmitTimesheet
          onClose={hideSubmitFormHandler}
          isSuccess={refreshTSList}
          userEmail={props.userEmail}
        />
      )}
      {viewTS && (
        <ViewTimesheet
          onClose={hideViewFormHandler}
          ts={targetTS}
          admin={false}
        />
      )}
      {editTS && (
        <EditTimesheet
          onClose={hideEditFormHandler}
          isSuccess={refreshTSList}
          ts={targetTS}
        />
      )}
      <Fragment>
        <Button variant="primary" onClick={submitTimesheetHandler}>
          Submit New Timesheet
        </Button>
        <br></br>
        <br></br>
        <h1>
          Your pending timesheets:{" "}
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
            {pendingTS.map((ts) => (
              <tr>
                <td>{ts.rd_id}</td>
                <td>{ts.rd_month}</td>
                <td>{ts.rd_year}</td>
                <td>{ts.rd_status}</td>
                <td scope="col" align="center">
                  <Button variant="info" onClick={() => editTimesheet(ts)}>
                    View/Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <br></br>
        <br></br>
        <br></br>
        <h1>
          Your approved timesheets:{" "}
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
            {approvedTS.map((ts) => (
              <tr>
                <td>{ts.rd_id}</td>
                <td>{ts.rd_month}</td>
                <td>{ts.rd_year}</td>
                <td>{ts.rd_status}</td>
                <td scope="col" align="center">
                  <Button variant="info" onClick={() => viewTimesheet(ts)}>
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Fragment>
    </section>
  );
};

export default ListTimesheet;
