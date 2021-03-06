import React, { useEffect, useState, useRef } from "react";
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
import {CChartDoughnut } from "@coreui/react-chartjs";
import legend from "../../../assets/img/Legend.png";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import {
  listQuestions,
} from "../../../graphql/queries";
import AdminTable from "./AdminTable";

import awsconfig from "../../../aws-exports";

Amplify.configure(awsconfig);

function AdminDashboard({ props }) {
  const [admin, setAdmin] = useState(false);

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
  
  const colorMap = {
    'Strongly Disagree': '#B21F00',
    'Disagree': '#C9DE00',
    'Neutral': '#2FDE00',
    'Agree': '#00A6B4',
    'Strongly Agree': '#6800B4'
  };

  const hoverColorMap = {
    'Strongly Disagree': '#501800',
    'Disagree': '#4B5000',
    'Neutral': '#175000',
    'Agree': '#003350',
    'Strongly Agree': '#35014F  '
  };


  const q1Labels =  q1Occu.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {})

  const q1state = {
    labels: Object.keys(q1Labels),
    datasets: [
      {
        backgroundColor: Object.keys(q1Labels).map(l => colorMap[l]),
        hoverBackgroundColor: Object.keys(q1Labels).map(l => hoverColorMap[l]),
        data: Object.values(q1Labels),
      },
    ],
  };

  const q1options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Question 1",
        color: "#333",
        font: {
          size: 16
        }
      }
    }
  }

  const q2Labels =  q2Occu.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {})

  const q2state = {
    labels: Object.keys(q2Labels),
    datasets: [
      {
        backgroundColor: Object.keys(q2Labels).map(l => colorMap[l]),
        hoverBackgroundColor: Object.keys(q2Labels).map(l => hoverColorMap[l]),
        data: Object.values(q2Labels),
      },
    ],
  };

  const q2options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Question 2",
        color: "#333",
        font: {
          size: 16
        }
      }
    }
  }

  const q3Labels =  q3Occu.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {})

  const q3state = {
    labels: Object.keys(q3Labels),
    datasets: [
      {
        backgroundColor: Object.keys(q3Labels).map(l => colorMap[l]),
        hoverBackgroundColor: Object.keys(q3Labels).map(l => hoverColorMap[l]),
        data: Object.values(q3Labels),
      },
    ],
  };

  const q3options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Question 3",
        color: "#333",
        font: {
          size: 16
        }
      }
    }
  }

  const q4Labels =  q4Occu.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {})

  const q4state = {
    labels: Object.keys(q4Labels),
    datasets: [
      {
        backgroundColor: Object.keys(q4Labels).map(l => colorMap[l]),
        hoverBackgroundColor: Object.keys(q4Labels).map(l => hoverColorMap[l]),
        data: Object.values(q4Labels),
      },
    ],
  };

  const q4options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Question 4",
        color: "#333",
        font: {
          size: 16
        }
      }
    }
  }

  useEffect(() => {
    getallQuestions();
  }, []);

  const getallQuestions = async () => {
    const result = await API.graphql(graphqlOperation(listQuestions));
    console.log("DynamoDB query", result)
    let questionArray = await buildQuestionArray(
      result.data.listQuestions.items
    );
    console.log("All questions array", questionArray)
    setQuestion(questionArray);
};

  useEffect(() => {
    getallQArray(question);
  }, [question]);

  const getallQArray = (arr) => {
    try {
      let q1Array = arr.map((item) => item.question1);
      let q2Array = arr.map((item) => item.question2);
      let q3Array = arr.map((item) => item.question3);
      let q4Array = arr.map((item) => item.question4);

      setQ1Occu(q1Array);
      setQ2Occu(q2Array);
      setQ3Occu(q3Array);
      setQ4Occu(q4Array);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getallMapping(question);
  }, [question]);

  const getallMapping = (arr) => {
    try {
      let q1Array = arr.map((item) => item.question1);
      let q2Array = arr.map((item) => item.question2);
      let q3Array = arr.map((item) => item.question3);
      let q4Array = arr.map((item) => item.question4);

      let q1Map = pollMapping(q1Array).reduce((a, b) => a + b, 0);
      let q2Map = pollMapping(q2Array).reduce((a, b) => a + b, 0);
      let q3Map = pollMapping(q3Array).reduce((a, b) => a + b, 0);
      let q4Map = pollMapping(q4Array).reduce((a, b) => a + b, 0);

      setQ1(q1Map);
      setQ2(q2Map);
      setQ3(q3Map);
      setQ4(q4Map);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getallAnalytics(question);
  }, [question]);

  const getallAnalytics = (arr) => {
    try {
      let analyzeSentiment = sentimentMapping(arr.map((item) => item.analysis));
      let finalSentiment = getMode(analyzeSentiment);
      setAnalysis(finalSentiment);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    let user = await Auth.currentAuthenticatedUser();
    let groups = user.signInUserSession.accessToken.payload["cognito:groups"];
    if (groups != undefined && groups.includes("Administrator")) {
      setAdmin(true);
    }
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
      id: singleQuestion.id,
      owner: singleQuestion.owner,
      questionId: singleQuestion.questionID,
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
            <h1 className="display-3">Survey Dashboard</h1>
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
                    <h2>{(q1 / question.length).toPrecision(4)}</h2>
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
                    <h2>{(q2 / question.length).toPrecision(4)}</h2>
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
                    <h2>{(q3 / question.length).toPrecision(4)}</h2>
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
                    <h2>{(q4 / question.length).toPrecision(4)}</h2>
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
                    <h2>{analysis}</h2>
                  </CardText>
                </Card>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <br />
        <Row xs="4">
          <Col>
            <CChartDoughnut
              data={q1state}
              options={q1options}
            />
          </Col>
          <Col>
            <CChartDoughnut
              data={q2state}
              options={q2options}
            />
          </Col>
          <Col>
            <CChartDoughnut
              data={q3state}
              options={q3options}
            />
          </Col>
          <Col>
            <CChartDoughnut
              data={q4state}
              options={q4options}
            />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <img className="d-block mx-auto img-fluid w-35" src={legend} />
          </Col>
        </Row>
        <br />
        <AdminTable question={question} />
      </div>
    </div>
  );
}
export default AdminDashboard;
