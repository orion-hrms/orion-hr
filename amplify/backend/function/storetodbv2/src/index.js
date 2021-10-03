var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date();

  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: "user" },
        username: { S: event.request.userAttributes.username },
        email: { S: event.request.userAttributes.email },
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
