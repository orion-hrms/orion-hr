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
import { Line, Pie, Doughnut } from "react-chartjs-2";
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
  const [q1Occu, setQ1Occu] = useState([]);
  const [q2Occu, setQ2Occu] = useState([]);
  const [q3Occu, setQ3Occu] = useState([]);
  const [q4Occu, setQ4Occu] = useState([]);

  var q1state = {
    labels: Object.keys(q1Occu.reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {})),
    datasets: [
      {
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: Object.values(q1Occu.reduce(function (acc, curr) {
          return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {})),
      },
    ],
  };

  var q2state = {
    labels: Object.keys(q2Occu.reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {})),
    datasets: [
      {
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: Object.values(q2Occu.reduce(function (acc, curr) {
          return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {})),
      },
    ],
  };

  var q3state = {
    labels: Object.keys(q3Occu.reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {})),
    datasets: [
      {
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: Object.values(q3Occu.reduce(function (acc, curr) {
          return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {})),
      },
    ],
  };

  var q4state = {
    labels: Object.keys(q4Occu.reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {})),
    datasets: [
      {
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: Object.values(q4Occu.reduce(function (acc, curr) {
          return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {})),
      },
    ],
  };

  useEffect(() => {
    getallQuestions();
  }, []);

  const getallQuestions = async () => {
    const result = await API.graphql(graphqlOperation(listQuestions));
    let questionArray = await buildQuestionArray(
      result.data.listQuestions.items
    );
    let q1Array = questionArray.map((item) => item.question1);
    let q2Array = questionArray.map((item) => item.question2);
    let q3Array = questionArray.map((item) => item.question3);
    let q4Array = questionArray.map((item) => item.question4);
    setQuestion(questionArray);

    setQ1Occu(questionArray.map((item) => item.question1));
    setQ2Occu(questionArray.map((item) => item.question2));
    setQ3Occu(questionArray.map((item) => item.question3));
    setQ4Occu(questionArray.map((item) => item.question4));

    let q1Map = pollMapping(q1Array);
    let q2Map = pollMapping(q2Array);
    let q3Map = pollMapping(q3Array);
    let q4Map = pollMapping(q4Array);

    setQ1(q1Map);
    setQ2(q2Map);
    setQ3(q3Map);
    setQ4(q4Map);
    let analysis = sentimentMapping(questionArray.map((item) => item.analysis));
    setAnalysis(analysis);
  };

  function getQ1Occurances() {
    let q1Occ = q1.reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
    return q1Occ;
  };

  function getQ2Occurances() {
    let q2Occ = q2.map((item) => item.question2).reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
    return q2Occ;
  }

  function getQ3Occurances() {
    let q3Occ = q3.map((item) => item.question3).reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
    return q3Occ;
  }

  function getQ4Occurances() {
    let q4Occ = q4.map((item) => item.question4).reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
    return q4Occ;
  }

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
                    <h2>
                      {(
                        q1.reduce((a, b) => a + b, 0) / question.length
                      ).toPrecision(4)}
                    </h2>
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
                    <h2>
                      {(
                        q2.reduce((a, b) => a + b, 0) / question.length
                      ).toPrecision(4)}
                    </h2>
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
                    <h2>
                      {(
                        q3.reduce((a, b) => a + b, 0) / question.length
                      ).toPrecision(4)}
                    </h2>
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
                    <h2>
                      {(
                        q4.reduce((a, b) => a + b, 0) / question.length
                      ).toPrecision(4)}
                    </h2>
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
        <Row xs="4">
          <Col>
            <Doughnut
              data={q1state}
              options={{
                title: {
                  display: true,
                  text: "Question 1",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </Col>
          <Col>
            <Doughnut
              data={q2state}
              options={{
                title: {
                  display: true,
                  text: "Question 2",
                  fontSize: 20,
                },
                legend: {
                  display: false,
                  position: "right",
                },
              }}
            />
          </Col>
          <Col>
            <Doughnut
              data={q3state}
              options={{
                title: {
                  display: true,
                  text: "Question 3",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </Col>
          <Col>
            <Doughnut
              data={q4state}
              options={{
                title: {
                  display: true,
                  text: "Question 4",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </Col>
        </Row>
        <br />
        <AdminTable question={question} />
      </div>
    </div>
  );
}
export default AdminDashboard;
