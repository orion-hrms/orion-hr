import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "./Modal";
import uuid from "react-uuid";

const AddSprint = (props) => {
  const sprintID = uuid();
  const getSprintName = () => {
    if (props.latestSprint !== undefined) {
      let spintCount =
        parseInt(props.latestSprint.SprintName.split("#")[1]) + 1;
      return "Sprint#" + spintCount;
    } else {
      return "Sprint#1";
    }
  };
  const sprintName = getSprintName();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (startDate !== undefined) {
        var date = new Date(startDate);
        // var year = date.getFullYear();
        // var month = date.getMonth() + 1;
        // var day = date.getDate() < 15 ? 1 : 2;
        date.setDate(date.getDate() + 11);
        setEndDate(date.toLocaleDateString());
      }
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [startDate]);

  const addSprintHandler = () => {
    const fetchSprints = async () => {
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

    fetchSprints().catch((error) => {
      props.isSuccess(false);
      console.log(error.message);
    });
    props.isSuccess(true);
  };

  const startDateChangeHandler = (event) => {
    setStartDate(event.target.value.replaceAll("-", "/"));
  };

  return (
    <Modal onClose={props.onClose}>
      <Form onSubmit={addSprintHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Sprint ID</Form.Label>
          <Form.Control plaintext readOnly defaultValue={sprintID} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sprint Name</Form.Label>
          <Form.Control plaintext readOnly defaultValue={sprintName} />
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
          <Form.Control plaintext readOnly defaultValue={endDate} />
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

export default AddSprint;
