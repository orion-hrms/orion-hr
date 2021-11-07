var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date();
  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: "user" },
        UserName: { S: event.userName },
        UserEmail: { S: event.request.userAttributes.email },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
      },
      TableName: process.env.USERTABLE,
    };

    try {
      await ddb.putItem(params).promise();
      console.log("Success goodness");
    } catch (err) {
      console.log("Error goodness", err);
    }

    console.log("Success: Everything executed correctly");
  } else {
    console.log("Error: Nothing Good  written to DynamoDB");
  }
};
