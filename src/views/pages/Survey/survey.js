import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Button,
  Jumbotron,
  Container,
  Card,
  CardTitle,
  CardBody,
  CardText,
} from "reactstrap";
import Amplify, { API, graphqlOperation, Predictions } from "aws-amplify";
import { createQuestion, createSurvey } from "../../../graphql/mutations";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";

import awsconfig from "../../../aws-exports";
Predictions.addPluggable(new AmazonAIPredictionsProvider());

Amplify.configure(awsconfig);
Amplify.register(Predictions);

function Survey() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");
  const [userID, setUserID] = useState("");
  const [ques1, setQues1] = useState("");
  const [ques2, setQues2] = useState("");
  const [ques3, setQues3] = useState("");
  const [ques4, setQues4] = useState("");
  const [textToInterpret, setTextToInterpret] = useState(
    "Please enter your suggestions here"
  );
  let history = useHistory();

  function interpretFromPredictions() {
    Predictions.interpret({
      text: {
        source: {
          text: textToInterpret,
        },
        type: "ALL",
      },
    })
      .then((result) => {
        setResponse(
          JSON.stringify(result.textInterpretation.sentiment, null, 2)
        );
      })
      .catch((err) => {
        setResponse(JSON.stringify(err, null, 2));
      });
  }

  function setText(event) {
    setTextToInterpret(event.target.value);
  }

  function onQ1ValueChange(event) {
    console.log(event.target.value);
    setQues1(event.target.value);
  }

  function onQ2ValueChange(event) {
    console.log(event.target.value);
    setQues2(event.target.value);
  }

  function onQ3ValueChange(event) {
    console.log(event.target.value);
    setQues3(event.target.value);
  }

  function onQ4ValueChange(event) {
    console.log(event.target.value);
    setQues4(event.target.value);
  }

  async function sendToDB() {
    const data = await Predictions.interpret({
      text: {
        source: {
          text: textToInterpret,
        },
        type: "ALL",
      },
    });

    const random = (Math.floor(Math.random() * 100000) + 1).toString();
    const qID = (Math.floor(Math.random() * 100000) + 1).toString();

    const forms = {
      surveyID: random,
      surveyName: name,
      userId: userID,
    };

    const qlist = {
      questionID: qID,
      question1: ques1,
      question2: ques2,
      question3: ques3,
      question4: ques4,
      response: textToInterpret,
      analyze: data.textInterpretation.sentiment,
    };

    try {
      console.log(forms);
      console.log(qlist);
      await API.graphql(graphqlOperation(createSurvey, { input: forms }));
      await API.graphql(graphqlOperation(createQuestion, { input: qlist }));
      console.log("Success");
    } catch (err) {
      console.log("DB write error");
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    interpretFromPredictions();
    sendToDB();
    //history.push('./thankyou');
    alert(
      "Thank you. We have received your application and will get back to you soon."
    );
  };

  return (
    /**<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc6cdG5cynv1RawkvITsNY8L_etFJ6QT--2ArFjL1EgB7DfZw/viewform?embedded=true" width="1200" height="2091" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>**/
    <div className="Text">
      <div class="container-full-bg">
        <Jumbotron fluid>
          <Container className="themed-container" fluid="md">
            <Card>
              <CardTitle>
                <h1 className="display-3">Employee Sentiment Analysis</h1>
              </CardTitle>
              <br />
              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  <FormGroup>
                    <Label for="exampleUserID">Employee ID</Label>
                    <Input
                      type="userID"
                      name="userID"
                      id="exampleUserID"
                      placeholder="91989841798"
                      value={userID}
                      onChange={(e) => {
                        setUserID(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <br />
                  <FormGroup>
                    <Label for="exampleName">Employee Name</Label>
                    <Input
                      type="name"
                      name="name"
                      id="exampleName"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <br />
                  <p>
                    <b>
                      The following questions will discuss your employment
                      experiences within the company. Please answer as
                      truthfully as possible.
                    </b>
                  </p>
                  <FormGroup>
                    <Label for="exampleCheckbox">
                      I find purpose in my work.
                    </Label>
                    <Input
                      type="select"
                      value={ques1}
                      onChange={onQ1ValueChange}
                    >
                      <option value="" hidden></option>
                      <option value={"Strongly Agree"}>Strongly Agree</option>
                      <option value={"Agree"}>Agree</option>
                      <option value={"Neutral"}>Neutral</option>
                      <option value={"Disagree"}>Disagree</option>
                      <option value={"Strongly Disagree"}>
                        Strongly Disagree
                      </option>
                    </Input>
                  </FormGroup>
                  <br />
                  <FormGroup>
                    <Label for="exampleCheckbox">
                      My overall workload is managable.
                    </Label>
                    <Input
                      type="select"
                      value={ques2}
                      onChange={onQ2ValueChange}
                    >
                      <option value="" hidden></option>
                      <option value={"Strongly Agree"}>Strongly Agree</option>
                      <option value={"Agree"}>Agree</option>
                      <option value={"Neutral"}>Neutral</option>
                      <option value={"Disagree"}>Disagree</option>
                      <option value={"Strongly Disagree"}>
                        Strongly Disagree
                      </option>
                    </Input>
                  </FormGroup>
                  <br />
                  <FormGroup>
                    <Label for="exampleCheckbox">
                      This job allows me to use my skills and abilities
                      effectively.
                    </Label>
                    <Input
                      type="select"
                      value={ques3}
                      onChange={onQ3ValueChange}
                    >
                      <option value="" hidden></option>
                      <option value={"Strongly Agree"}>Strongly Agree</option>
                      <option value={"Agree"}>Agree</option>
                      <option value={"Neutral"}>Neutral</option>
                      <option value={"Disagree"}>Disagree</option>
                      <option value={"Strongly Disagree"}>
                        Strongly Disagree
                      </option>
                    </Input>
                  </FormGroup>
                  <br />
                  <FormGroup>
                    <Label for="exampleCheckbox">
                      This job allows me to learn new skills and develop
                      professionally.
                    </Label>
                    <Input
                      type="select"
                      value={ques4}
                      onChange={onQ4ValueChange}
                    >
                      <option value="" hidden></option>
                      <option value={"Strongly Agree"}>Strongly Agree</option>
                      <option value={"Agree"}>Agree</option>
                      <option value={"Neutral"}>Neutral</option>
                      <option value={"Disagree"}>Disagree</option>
                      <option value={"Strongly Disagree"}>
                        Strongly Disagree
                      </option>
                    </Input>
                  </FormGroup>
                  <br />
                  <FormGroup>
                    <Label for="exampleSuggestions">Suggestions</Label>
                    <Input
                      addonType="append"
                      type="textarea"
                      value={textToInterpret}
                      onChange={setText}
                    />
                    <br />
                    <Button
                      type="submit"
                      className="btn btn-secondary"
                      onClick={handleFormSubmit}
                      size="lg"
                    >
                      Submit
                    </Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
}

export default Survey;
