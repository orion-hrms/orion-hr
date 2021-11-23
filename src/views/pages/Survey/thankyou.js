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
  Card,
  CardTitle,
  CardBody,
  CardText,
} from "reactstrap";
import Amplify, { API, graphqlOperation, Predictions } from "aws-amplify";
import { createQuestion, createSurvey } from "../../../graphql/mutations";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";

import awsconfig from "../../../aws-exports";

Amplify.configure(awsconfig);

Amplify.register(Predictions);
Predictions.addPluggable(new AmazonAIPredictionsProvider());

function Thankyou() {
 
  return (
    <div className="Text">
      <div class="container-full-bg">
        <Jumbotron fluid>
          <Container className="themed-container" fluid="md">
             <h1>"Thank you. We have received your application and will get back to you soon."</h1>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
}

export default Thankyou;
