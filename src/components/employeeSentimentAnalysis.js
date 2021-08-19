import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Button,
  Jumbotron,
  Container,
} from "reactstrap";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify, { API, graphqlOperation, Predictions } from "aws-amplify";
import { createEmployee } from "./graphql/mutations";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";

import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

function employeeSentimentAnalysis() {
  const [response, setResponse] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [names, setName] = useState("");
  const [emails, setEmail] = useState("");
  const [positions, setPosition] = useState("");
  const [purpose, setPurpose] = useState("");
  const [workload, setWorkLoad] = useState("");
  const [skills, setSkills] = useState("");
  const [opportunities, setOpportunities] = useState("");
  const [learn, setLearn] = useState("");
  const [textToInterpret, setTextToInterpret] = useState(
    "Please enter your suggestions here"
  );

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

  async function sendToDB() {
    const data = await Predictions.interpret({
      text: {
        source: {
          text: textToInterpret,
        },
        type: "ALL",
      },
    });
    const todo = {
      name: names,
      email: emails,
      position: positions,
      response: textToInterpret,
      analysis: data.textInterpretation.sentiment,
    };
    return await API.graphql(graphqlOperation(createEmployee, { input: todo }));
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    interpretFromPredictions();
    sendToDB();
  };

  return (
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
                    <Label for="exampleName">Name</Label>
                    <Input
                      type="name"
                      name="name"
                      id="examplename"
                      placeholder="John Doe"
                      value={names}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="johndoe@sjsu.edu"
                      value={emails}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePosition">Position</Label>
                    <Input
                      type="position"
                      name="position"
                      id="exampleposition"
                      placeholder="Research & Development"
                      value={positions}
                      onChange={(e) => {
                        setPosition(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <br />
                  <p>
                    <b>
                      The following questions will discuss your employement
                      experiences within the company. Please answer as
                      truthfully as possible.
                    </b>
                  </p>
                  <FormGroup>
                    <Label for="exampleCheckbox">
                      I find purpose in my work.
                    </Label>
                    <div>
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Strongly Agree"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Agree"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Neutral"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Disagree"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Strongly Disagree"
                      />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleCheckbox">
                      My overall workload is managable.
                    </Label>
                    <div>
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Strongly Agree"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Agree"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Neutral"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Disagree"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Strongly Disagree"
                      />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleCheckbox">
                      This job allows me to use my skills and abilities
                      effectively.
                    </Label>
                    <div>
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Strongly Agree"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Agree"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Neutral"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Disagree"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Strongly Disagree"
                      />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleCheckbox">
                      This job provides me with opportunities for promotions or
                      career advancements within the company.
                    </Label>
                    <div>
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Strongly Agree"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Agree"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Neutral"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Disagree"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Strongly Disagree"
                      />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleCheckbox">
                      This job allows me to learn new skills and develop
                      professionally.
                    </Label>
                    <div>
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Strongly Agree"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Agree"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Neutral"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Disagree"
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Strongly Disagree"
                      />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSuggestions">Suggestions</Label>
                    <Input
                      addonType="append"
                      type="textarea"
                      value={textToInterpret}
                      onChange={setText}
                    />
                    <br/>
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
              <br />
              <CardText>
                <h2 className="text-center">{response}</h2>
              </CardText>
              <AmplifySignOut />
            </Card>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
}

export default withAuthenticator(employeeSentimentAnalysis);