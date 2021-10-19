import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "./Modal";
import uuid from "react-uuid";

const AddJob = (props) => {
  const jobID = uuid();
  const [jobName, setJobName] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const addSprintHandler = () => {
    const addJobRequest = async () => {
      const payload = {
        operation: "update",
        payload: {
          TableName: "JOB_TBL",
          Key: {
            JobID: jobID,
          },
          UpdateExpression:
            "set JobName =:sn, StartDate =:sd, EndDate =:ed, SprintID =:si",
          ExpressionAttributeValues: {
            ":sn": jobName,
            ":sd": startDate,
            ":ed": endDate,
            ":si": props.sprintID,
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

    addJobRequest().catch((error) => {
      props.isSuccess(false);
      console.log(error.message);
    });
    props.isSuccess(true);
  };

  const startDateChangeHandler = (event) => {
    setStartDate(event.target.value.replaceAll("-", "/"));
  };

  const endDateChangeHandler = (event) => {
    setEndDate(event.target.value.replaceAll("-", "/"));
  };

  const jobNameChangeHandler = (event) => {
    setJobName(event.target.value);
  };

  return (
    <Modal onClose={props.onClose}>
      <Form onSubmit={addSprintHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Sprint ID</Form.Label>
          <Form.Control plaintext readOnly defaultValue={props.sprintID} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Job ID</Form.Label>
          <Form.Control plaintext readOnly defaultValue={jobID} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Job Name</Form.Label>
          <Form.Control required type="text" onChange={jobNameChangeHandler} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            required
            type="date"
            onChange={startDateChangeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>End Date</Form.Label>
          <Form.Control required type="date" onChange={endDateChangeHandler} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button onClick={props.onClose}>Cancel</Button>
      </Form>
    </Modal>
  );
};

export default AddJob;
