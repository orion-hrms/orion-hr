import React, { Fragment, useEffect, useState } from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import Modal from "./Modal";
import uuid from "react-uuid";

const ViewTimesheet = (props) => {
  const [recordID, setRecordID] = useState(props.ts.rd_id);
  const [month, setMonth] = useState(props.ts.rd_month);
  const [year, setYear] = useState(props.ts.rd_year);
  const [submitTable, setSubmitTable] = useState(props.ts.record_hr);

  const submitHandler = (status) => {
    const addTimesheetRequest = async () => {
      const payload = {
        operation: "update",
        payload: {
          TableName: "Timesheet",
          Key: {
            rd_id: recordID,
          },
          UpdateExpression: "set rd_status =:sc",
          ExpressionAttributeValues: {
            ":sc": status,
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

    addTimesheetRequest().catch((error) => {
      props.isSuccess(false);
      console.log(error.message);
    });
    props.isSuccess(true);
  };

  console.log(submitTable);
  return (
    <Modal onClose={props.onClose}>
      <section
        style={{ height: "30rem", overflowY: "scroll", overflowX: "hidden" }}
      >
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Record ID</Form.Label>
              <Form.Control plaintext readOnly defaultValue={recordID} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Year</Form.Label>
              <Form.Control plaintext readOnly defaultValue={year} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Month</Form.Label>
              <Form.Control plaintext readOnly defaultValue={month} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Total</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {submitTable.map((day) => (
                    <tr>
                      <td>{day.date}</td>
                      <td>
                        <Form.Control
                          type="time"
                          readOnly
                          defaultValue={day.startTime}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="time"
                          readOnly
                          defaultValue={day.endTime}
                        />
                      </td>
                      <td>{day.total}</td>
                      <td>
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue={day.type}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Form.Group>
          </Row>
          {props.admin && (
            <Fragment>
              <Button
                variant="primary"
                onClick={() => submitHandler("Approved")}
              >
                Approve
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                variant="primary"
                onClick={() => submitHandler("Declined")}
              >
                Decline
              </Button>
              &nbsp;&nbsp;&nbsp;
            </Fragment>
          )}
          <Button onClick={props.onClose}>Close</Button>
        </Form>
      </section>
    </Modal>
  );
};

export default ViewTimesheet;
