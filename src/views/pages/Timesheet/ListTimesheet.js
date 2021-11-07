import React, { Fragment, useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

import uuid from "react-uuid";

const ListTimesheet = (props) => {
  return (
    <section>
      <br></br>
      <br></br>
      <br></br>
      <Fragment>
        <Button variant="primary">Submit New Timesheet</Button>
        <br></br>
        <br></br>
        <h1>
          Your pending timesheets:{" "}
          <Button variant="outline-dark">Refresh</Button>
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
            {/* {userJobs.map((job) => (
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
              ))} */}
          </tbody>
        </Table>
        <br></br>
        <br></br>
        <br></br>
        <h1>
          Your approved timesheets:{" "}
          <Button variant="outline-dark">Refresh</Button>
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
            {/* {userJobs.map((job) => (
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
              ))} */}
          </tbody>
        </Table>
      </Fragment>
    </section>
  );
};

export default ListTimesheet;
