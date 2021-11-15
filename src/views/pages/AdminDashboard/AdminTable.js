import React from "react";
import { Table, Form, InputGroup } from "reactstrap";

export default function AdminTable(props) {
  
  console.log("props", props.question);
  return (
    <div className="container">
      <div className=" jumbotron">
        <h2>Questions</h2>
        <Table striped>
          <thead>
            <tr>
              <th>Question 1</th>
              <th>Question 2</th>
              <th>Question 3</th>
              <th>Question 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I find purpose in my work</td>
              <td>My overall workload is managable</td>
              <td>This job allows me to use my skills and abilities effectively.</td>
              <td>This job allows me to learn new skills and develop professionally</td>
            </tr>
          </tbody>
        </Table>
        <br/> 
        <h2>User Responses</h2>
        <Table striped>
          <thead>
            <tr>
              <th>Q1</th>
              <th>Q2</th>
              <th>Q3</th>
              <th>Q4</th>
              <th>Response</th>
              <th>Sentiment</th>
            </tr>
          </thead>
          <tbody>
            {props.question.map((question) => (
              <tr key={question.QuestionID}>
                <td>{question.question1}</td>
                <td>{question.question2}</td>
                <td>{question.question3}</td>
                <td>{question.question4}</td>
                <td>{question.response}</td>
                <td>{question.analysis}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}