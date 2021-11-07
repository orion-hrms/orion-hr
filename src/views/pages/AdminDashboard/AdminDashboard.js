import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Button,
  Jumbotron,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardText,
} from "reactstrap";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {
  listQuestion,
  listSurvey,
  getQuestion,
  getSurvey,
} from "../../../graphql/mutations";

import awsconfig from "../../../aws-exports";

Amplify.configure(awsconfig);

function AdminDashboard() {
  const [response, setResponse] = useState("");
  const [ques1, setQues1] = useState("");
  const [ques2, setQues2] = useState("");
  const [ques3, setQues3] = useState("");
  const [ques4, setQues4] = useState("");

  function listQ1(event) {
    console.log(event.target.value);
    setQues1(event.target.value);
  }

  function listQ2(event) {
    console.log(event.target.value);
    setQues1(event.target.value);
  }

  function listQ3(event) {
    console.log(event.target.value);
    setQues1(event.target.value);
  }

  function listQ4(event) {
    console.log(event.target.value);
    setQues1(event.target.value);
  }

  return (
    <div className="Text">
      <div class="container-full-bg">
        <Jumbotron fluid>
          <br />
          <Container className="themed-container" fluid="md">
            <h1 className="display-3">Administrator Dashboard</h1>
            <br />
            <Row>
              <Col xs="6" sm="4">
                <Card
                  body
                  inverse
                  style={{ backgroundColor: "#333", borderColor: "#333" }}
                >
                  <CardTitle>
                    <h1 className="display-3">Number of Responses</h1>
                  </CardTitle>
                  <CardText>
                    <h2>10</h2>
                  </CardText>
                </Card>
              </Col>
              <Col xs="6" sm="4">
                <Card
                  body
                  inverse
                  style={{ backgroundColor: "#333", borderColor: "#333" }}
                >
                  <CardTitle>
                    <h1 className="display-3">Q1 Average Score</h1>
                  </CardTitle>
                  <CardText>
                    <h2>3</h2>
                  </CardText>
                </Card>
              </Col>
              <Col sm="4">
                <Card
                  body
                  inverse
                  style={{ backgroundColor: "#333", borderColor: "#333" }}
                >
                  <CardTitle>
                    <h1 className="display-3">Q2 Average Score</h1>
                  </CardTitle>
                  <CardText>
                    <h2>4.6</h2>
                  </CardText>
                </Card>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs="6" sm="4">
                <Card
                  body
                  inverse
                  style={{ backgroundColor: "#333", borderColor: "#333" }}
                >
                  <CardTitle>
                    <h1 className="display-3">Q3 Average Score</h1>
                  </CardTitle>
                  <CardText>
                    <h2>3,1</h2>
                  </CardText>
                </Card>
              </Col>
              <Col xs="6" sm="4">
                <Card
                  body
                  inverse
                  style={{ backgroundColor: "#333", borderColor: "#333" }}
                >
                  <CardTitle>
                    <h1 className="display-3">Q4 Average Score</h1>
                  </CardTitle>
                  <CardText>
                    <h2>5</h2>
                  </CardText>
                </Card>
              </Col>
              <Col sm="4">
                <Card
                  body
                  inverse
                  style={{ backgroundColor: "#333", borderColor: "#333" }}
                >
                  <CardTitle>
                    <h1 className="display-3">Sentiment Analytics</h1>
                  </CardTitle>
                  <CardText>
                    <h2>predominant=POSITIVE</h2>
                  </CardText>
                </Card>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
}
export default AdminDashboard;
