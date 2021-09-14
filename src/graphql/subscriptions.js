/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSurvey = /* GraphQL */ `
  subscription OnCreateSurvey($owner: String!) {
    onCreateSurvey(owner: $owner) {
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
export const onUpdateSurvey = /* GraphQL */ `
  subscription OnUpdateSurvey($owner: String!) {
    onUpdateSurvey(owner: $owner) {
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
export const onDeleteSurvey = /* GraphQL */ `
  subscription OnDeleteSurvey($owner: String!) {
    onDeleteSurvey(owner: $owner) {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($owner: String!) {
    onCreateQuestion(owner: $owner) {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($owner: String!) {
    onUpdateQuestion(owner: $owner) {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($owner: String!) {
    onDeleteQuestion(owner: $owner) {
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
export const onCreateS3Object = /* GraphQL */ `
  subscription OnCreateS3Object {
    onCreateS3Object {
      id
      bucket
      region
      key
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateS3Object = /* GraphQL */ `
  subscription OnUpdateS3Object {
    onUpdateS3Object {
      id
      bucket
      region
      key
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteS3Object = /* GraphQL */ `
  subscription OnDeleteS3Object {
    onDeleteS3Object {
      id
      bucket
      region
      key
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateEmployeedetail = /* GraphQL */ `
  subscription OnCreateEmployeedetail {
    onCreateEmployeedetail {
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
export const onUpdateEmployeedetail = /* GraphQL */ `
  subscription OnUpdateEmployeedetail {
    onUpdateEmployeedetail {
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
export const onDeleteEmployeedetail = /* GraphQL */ `
  subscription OnDeleteEmployeedetail {
    onDeleteEmployeedetail {
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
export const onCreateTickets = /* GraphQL */ `
  subscription OnCreateTickets {
    onCreateTickets {
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
export const onUpdateTickets = /* GraphQL */ `
  subscription OnUpdateTickets {
    onUpdateTickets {
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
export const onDeleteTickets = /* GraphQL */ `
  subscription OnDeleteTickets {
    onDeleteTickets {
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
export const onCreateReminders = /* GraphQL */ `
  subscription OnCreateReminders {
    onCreateReminders {
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
export const onUpdateReminders = /* GraphQL */ `
  subscription OnUpdateReminders {
    onUpdateReminders {
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
export const onDeleteReminders = /* GraphQL */ `
  subscription OnDeleteReminders {
    onDeleteReminders {
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
export const onCreateMeetings = /* GraphQL */ `
  subscription OnCreateMeetings {
    onCreateMeetings {
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
export const onUpdateMeetings = /* GraphQL */ `
  subscription OnUpdateMeetings {
    onUpdateMeetings {
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
export const onDeleteMeetings = /* GraphQL */ `
  subscription OnDeleteMeetings {
    onDeleteMeetings {
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
