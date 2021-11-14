import React, { useEffect, useState } from "react";
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
  listQuestions,
  listSurveys,
  getQuestion,
  getSurvey,
} from "../../../graphql/queries";

import awsconfig from "../../../aws-exports";

Amplify.configure(awsconfig);

function AdminDashboard(props) {
  const [response, setResponse] = useState([]);
  const [ques1, setQues1] = useState([]);
  const [ques2, setQues2] = useState([]);
  const [ques3, setQues3] = useState([]);
  const [ques4, setQues4] = useState([]);

  useEffect(() => {
    getallQuestions();
  }, []);

  const getallQuestions = async () => {
    console.log("inside questions");
    const result = await API.graphql(graphqlOperation(listQuestions));
    console.log("show question", result);
  };

  const getQuestionList = async (QuestionList) => {
    return Promise.all(
      QuestionList.map(async (i) => {
        return getOneQuestion(i);
      })
    );
  };

  const getOneQuestion = async (singleQuestion) => {
    console.log("getOneQuestion", singleQuestion);
    return {
      questionId: singleQuestion.id,
      question1: singleQuestion.question1,
      question2: singleQuestion.question2,
      question3: singleQuestion.question3,
      question4: singleQuestion.question4,
      response: singleQuestion.response,
      analysis: singleQuestion.analysis
    };
  };

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
                    <h2>15</h2>
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
                    <h2>3.4</h2>
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
                    <h2>predominant: POSITIVE</h2>
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
