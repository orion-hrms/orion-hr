import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import Modal from "./Modal";
import uuid from "react-uuid";

const ViewJob = (props) => {
  const jobID = props.job.JobID;
  const [jobName, setJobName] = useState(props.job.JobName);
  const [ownerEmail, setOwnerEmail] = useState(props.job.OwnerEmail);
  const [jobDescription, setJobDescription] = useState(
    props.job.JobDescription
  );
  const [score, setScore] = useState(props.job.Score);
  const [jobStatus, setJobStatus] = useState(props.job.JobStatus);
  const startDate = props.job.StartDate;
  const endDate = props.job.EndDate;

  const users = props.usersList;

  const addJobHandler = () => {
    const addJobRequest = async () => {
      const payload = {
        operation: "update",
        payload: {
          TableName: "JOB_TBL",
          Key: {
            JobID: jobID,
          },
          UpdateExpression:
            "set JobName =:sn, JobDescription =:sj, OwnerEmail =:oe, Score =:sc, JobStatus =:tu, StartDate =:sd, EndDate =:ed, SprintID =:si",
          ExpressionAttributeValues: {
            ":sn": jobName,
            ":sj": jobDescription,
            ":oe": ownerEmail,
            ":sc": score,
            ":tu": jobStatus,
            ":sd": startDate,
            ":ed": endDate,
            ":si": props.job.SprintID,
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

  const jobNameChangeHandler = (event) => {
    setJobName(event.target.value);
  };

  const jobDesChangeHandler = (event) => {
    setJobDescription(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setOwnerEmail(event.target.value);
  };

  const statusChangeHandler = (event) => {
    setJobStatus(event.target.value);
  };

  const scoreChangeHandler = (event) => {
    setScore(event.target.value);
  };

  return (
    <Modal onClose={props.onClose}>
      <section
        style={{ height: "30rem", overflowY: "scroll", overflowX: "hidden" }}
      >
        <Form onSubmit={addJobHandler}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Sprint ID</Form.Label>
              <Form.Control
                plaintext
                readOnly
                defaultValue={props.job.SprintID}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Job ID</Form.Label>
              <Form.Control plaintext readOnly defaultValue={jobID} />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Job Name</Form.Label>
            <Form.Control
              required
              type="text"
              maxLength={50}
              defaultValue={jobName}
              onChange={jobNameChangeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Job Description</Form.Label>
            <Form.Control
              as="textarea"
              defaultValue={jobDescription}
              style={{ height: "100px" }}
              onChange={jobDesChangeHandler}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Owner Email</Form.Label>
              <Form.Select
                htmlSize="5"
                required
                onChange={emailChangeHandler}
                defaultValue={ownerEmail}
              >
                <option>Unassigned</option>
                {users.map((user) => (
                  <option>{user}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}></Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col}>
              <Form.Label>Start Date</Form.Label>
              <Form.Control plaintext readOnly defaultValue={startDate} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>End Date</Form.Label>
              <Form.Control plaintext readOnly defaultValue={endDate} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Status</Form.Label>
              <Form.Select
                defaultValue={jobStatus}
                onChange={statusChangeHandler}
              >
                <option>Defined</option>
                <option>Progressed</option>
                <option>Completed</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Score</Form.Label>
              <Form.Control
                required
                type="number"
                defaultValue={score}
                onChange={scoreChangeHandler}
              />
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

export default ViewJob;
