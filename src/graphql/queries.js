/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSurvey = /* GraphQL */ `
  query GetSurvey($id: ID!) {
    getSurvey(id: $id) {
      id
      surveyID
      surveyName
      userId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSurveys = /* GraphQL */ `
  query ListSurveys(
    $filter: ModelSurveyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        surveyID
        surveyName
        userId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      questionID
      surveyID
      question1
      question2
      question3
      question4
      response
      analyze
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        questionID
        surveyID
        question1
        question2
        question3
        question4
        response
        analyze
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getS3Object = /* GraphQL */ `
  query GetS3Object($id: ID!) {
    getS3Object(id: $id) {
      id
      bucket
      region
      key
      createdAt
      updatedAt
    }
  }
`;
export const listS3Objects = /* GraphQL */ `
  query ListS3Objects(
    $filter: ModelS3ObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listS3Objects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bucket
        region
        key
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      UserId
      UserName
      UserEmail
      UserRole
      UserStatus
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModeluserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UserId
        UserName
        UserEmail
        UserRole
        UserStatus
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getEmployeedetail = /* GraphQL */ `
  query GetEmployeedetail($id: ID!) {
    getEmployeedetail(id: $id) {
      id
      UserId
      UserName
      UserEmail
      tag
      owner
      paygrade
      designation
      department
      joiningDate
      file {
        id
        bucket
        region
        key
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEmployeedetails = /* GraphQL */ `
  query ListEmployeedetails(
    $filter: ModelemployeedetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployeedetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UserId
        UserName
        UserEmail
        tag
        owner
        paygrade
        designation
        department
        joiningDate
        file {
          id
          bucket
          region
          key
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTickets = /* GraphQL */ `
  query GetTickets($id: ID!) {
    getTickets(id: $id) {
      id
      createdby
      priority
      subject
      category
      feedback
      body
      createdon
      createdAt
      updatedAt
    }
  }
`;
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdby
        priority
        subject
        category
        feedback
        body
        createdon
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReminders = /* GraphQL */ `
  query GetReminders($id: ID!) {
    getReminders(id: $id) {
      id
      createdby
      priority
      subject
      category
      createdon
      createdAt
      updatedAt
    }
  }
`;
export const listReminders = /* GraphQL */ `
  query ListReminders(
    $filter: ModelRemindersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReminders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdby
        priority
        subject
        category
        createdon
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMeetings = /* GraphQL */ `
  query GetMeetings($id: ID!) {
    getMeetings(id: $id) {
      id
      createdon
      subject
      Category
      ScheduledOn
      createdAt
      updatedAt
    }
  }
`;
export const listMeetings = /* GraphQL */ `
  query ListMeetings(
    $filter: ModelMeetingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeetings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdon
        subject
        Category
        ScheduledOn
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
