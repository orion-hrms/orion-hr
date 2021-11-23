import React, { useEffect, useState } from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import Modal from "./Modal";
import uuid from "react-uuid";

const EditTimesheet = (props) => {
  const [recordID, setRecordID] = useState(props.ts.rd_id);
  const [month, setMonth] = useState(props.ts.rd_month);
  const [year, setYear] = useState(props.ts.rd_year);
  const [submitTable, setSubmitTable] = useState(props.ts.record_hr);
  const [refreshTable, setRefreshTable] = useState(1);

  const submitHandler = () => {
    const addTimesheetRequest = async () => {
      const payload = {
        operation: "update",
        payload: {
          TableName: "Timesheet",
          Key: {
            rd_id: recordID,
          },
          UpdateExpression:
            "set rd_status =:sc, record_hr =:tu",
          ExpressionAttributeValues: {
            ":sc": "Pending",
            ":tu": submitTable,
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

  const startTimeHandler = (event, index) => {
    let table = submitTable;
    table[index].startTime = event.target.value;
    if (table[index].endTime != undefined) {
      let st = table[index].startTime;
      let et = table[index].endTime;
      let hst = st.split(":")[0];
      let mst = st.split(":")[1];
      let het = et.split(":")[0];
      let met = et.split(":")[1];
      let dst = new Date(year, month, 1, hst, mst, 0, 0);
      let det = new Date(year, month, 1, het, met, 0, 0);
      let diff = Math.abs(det - dst);
      let hours = Math.round(diff / 1000 / 60 / 60, 3);
      table[index].total = hours;
    }
    setSubmitTable(table);
    setRefreshTable(refreshTable + 1);
  };

  const endTimeHandler = (event, index) => {
    let table = submitTable;
    table[index].endTime = event.target.value;
    if (table[index].startTime != undefined) {
      let st = table[index].startTime;
      let et = table[index].endTime;
      let hst = st.split(":")[0];
      let mst = st.split(":")[1];
      let het = et.split(":")[0];
      let met = et.split(":")[1];
      let dst = new Date(year, month, 1, hst, mst, 0, 0);
      let det = new Date(year, month, 1, het, met, 0, 0);
      let diff = Math.abs(det - dst);
      let hours = Math.round(diff / 1000 / 60 / 60, 3);
      table[index].total = hours;
    }
    setSubmitTable(table);
    setRefreshTable(refreshTable + 1);
  };

  const typeChangeHandler = (event, index) => {
    let table = submitTable;
    table[index].type = event.target.value;
    setSubmitTable(table);
  };

  console.log(submitTable);
  return (
    <Modal onClose={props.onClose}>
      <section
        style={{ height: "30rem", overflowY: "scroll", overflowX: "hidden" }}
      >
        <Form onSubmit={submitHandler}>
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
                          required
                          type="time"
                          defaultValue={day.startTime}
                          onChange={(event) =>
                            startTimeHandler(event, submitTable.indexOf(day))
                          }
                        />
                      </td>
                      <td>
                        <Form.Control
                          required
                          type="time"
                          defaultValue={day.endTime}
                          onChange={(event) =>
                            endTimeHandler(event, submitTable.indexOf(day))
                          }
                        />
                      </td>
                      <td>{day.total}</td>
                      <td>
                        <Form.Select
                          defaultValue={day.type}
                          onChange={(event) =>
                            typeChangeHandler(event, submitTable.indexOf(day))
                          }
                        >
                          <option>Regular</option>
                          <option>PTO</option>
                          <option>Leave</option>
                        </Form.Select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button onClick={props.onClose}>Cancel</Button>
        </Form>
      </section>
    </Modal>
  );
};

export default EditTimesheet;
