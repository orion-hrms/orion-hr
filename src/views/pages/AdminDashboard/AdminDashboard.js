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
import AdminTable from "./AdminTable";

import awsconfig from "../../../aws-exports";

Amplify.configure(awsconfig);

function AdminDashboard(props) {
  const [analysis, setAnalysis] = useState([]);
  const [question, setQuestion] = useState([]);
  const [q1, setQ1] = useState([]);
  const [q2, setQ2] = useState([]);
  const [q3, setQ3] = useState([]);
  const [q4, setQ4] = useState([]);

  useEffect(() => {
    getallQuestions();
  }, []);

  const getallQuestions = async () => {
    const result = await API.graphql(graphqlOperation(listQuestions));
    let questionArray = await buildQuestionArray(
      result.data.listQuestions.items
    );
    let q1Array = pollMapping(questionArray.map((item) => item.question1));
    let q2Array = pollMapping(questionArray.map((item) => item.question2));
    let q3Array = pollMapping(questionArray.map((item) => item.question3));
    let q4Array = pollMapping(questionArray.map((item) => item.question4));
    setQuestion(questionArray);
    setQ1(q1Array);
    setQ2(q2Array);
    setQ3(q3Array);
    setQ4(q4Array);
    let analysis = sentimentMapping(questionArray.map((item) => item.analysis));
    setAnalysis(analysis);
  };

  function getMode(array) {
    if (array.length == 0) return null;
    var modeMap = {};
    var maxEl = array[0],
      maxCount = 1;
    for (var i = 0; i < array.length; i++) {
      var el = array[i];
      if (modeMap[el] == null) modeMap[el] = 1;
      else modeMap[el]++;
      if (modeMap[el] > maxCount) {
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
    return maxEl;
  }

  function sentimentMapping(arr) {
    if (arr.length == 0) return null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].substring(13, 16) == "POS") {
        arr[i] = "POSITIVE";
      } else if (arr[i].substring(13, 16) == "NEG") {
        arr[i] = "NEGATIVE";
      }
    }
    return arr;
  }

  function pollMapping(arr) {
    if (arr.length == 0) return null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "Strongly Agree") {
        arr[i] = 5;
      } else if (arr[i] == "Agree") {
        arr[i] = 4;
      } else if (arr[i] == "Neutral") {
        arr[i] = 3;
      } else if (arr[i] == "Disagree") {
        arr[i] = 2;
      } else arr[i] = 1;
    } 
    return arr;
  }

  const buildQuestionArray = async (listQuestions) => {
    return await getQuestionList(listQuestions);
  };

  const getQuestionList = async (questionList) => {
    return Promise.all(
      questionList.map(async (i) => {
        return getOneQuestion(i);
      })
    );
  };

  const getOneQuestion = async (singleQuestion) => {
    return {
      questionId: singleQuestion.id,
      question1: singleQuestion.question1,
      question2: singleQuestion.question2,
      question3: singleQuestion.question3,
      question4: singleQuestion.question4,
      response: singleQuestion.response,
      analysis: singleQuestion.analyze,
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
                    <h2>{question.length}</h2>
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
                    <h2>{q1.reduce((a, b) => a + b, 0) / question.length}</h2>
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
                    <h2>{q2.reduce((a, b) => a + b, 0) / question.length}</h2>
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
                    <h2>{q3.reduce((a, b) => a + b, 0) / question.length}</h2>
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
                    <h2>{q4.reduce((a, b) => a + b, 0) / question.length}</h2>
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
                    <h1 className="display-3">Predominant Sentiment</h1>
                  </CardTitle>
                  <CardText>
                    <h2>{getMode(analysis)}</h2>
                  </CardText>
                </Card>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <br />
        <AdminTable question={question} />
      </div>
    </div>
  );
}
export default AdminDashboard;
