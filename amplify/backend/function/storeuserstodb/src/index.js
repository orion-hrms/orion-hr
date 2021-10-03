// /* Amplify Params - DO NOT EDIT
// 	API_ORIONHR_EMPLOYEEDETAILTABLE_ARN
// 	API_ORIONHR_EMPLOYEEDETAILTABLE_NAME
// 	API_ORIONHR_GRAPHQLAPIIDOUTPUT
// 	ENV
// 	REGION
// Amplify Params - DO NOT EDIT */

// exports.handler = async (event) => {
//     // TODO implement
//     const response = {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  },
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
// };

var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date();
  //   const YOUR_APP_NAME = "orionhr";
  //   const USERTABLE_NAME = "employeedetail-zqm5mfqqjbbk7ifsz72a4whbb4-dev";

  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: "user" },
        UserName: { S: event.request.userAttributes.name },
        UserEmail: { S: event.request.userAttributes.email },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
      },
      TableName: process.env.USERTABLE_NAME,
      //   TableName:
      //     process.env.API_amplify-orionhr_employeedetail-zqm5mfqqjbbk7ifsz72a4whbb4-dev,
    };

    // Call DynamoDB
    try {
      await ddb.putItem(params).promise();
      console.log("lambda");
      console.log("Success");
    } catch (err) {
      console.log("errr");
      console.log("Error", err);
    }

    console.log("Success: Everything executed correctly");
    context.done(null, event);
  } else {
    // Nothing to do, the user's email ID is unknown
    console.log("Nothing was written to DynamoDB");
    console.log("Error: Nothing was written to DynamoDB");
    context.done(null, event);
  }
};
