/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSurvey = /* GraphQL */ `
  mutation CreateSurvey(
    $input: CreateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    createSurvey(input: $input, condition: $condition) {
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
export const updateSurvey = /* GraphQL */ `
  mutation UpdateSurvey(
    $input: UpdateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    updateSurvey(input: $input, condition: $condition) {
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
export const deleteSurvey = /* GraphQL */ `
  mutation DeleteSurvey(
    $input: DeleteSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    deleteSurvey(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createS3Object = /* GraphQL */ `
  mutation CreateS3Object(
    $input: CreateS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    createS3Object(input: $input, condition: $condition) {
      id
      bucket
      region
      key
      createdAt
      updatedAt
    }
  }
`;
export const updateS3Object = /* GraphQL */ `
  mutation UpdateS3Object(
    $input: UpdateS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    updateS3Object(input: $input, condition: $condition) {
      id
      bucket
      region
      key
      createdAt
      updatedAt
    }
  }
`;
export const deleteS3Object = /* GraphQL */ `
  mutation DeleteS3Object(
    $input: DeleteS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    deleteS3Object(input: $input, condition: $condition) {
      id
      bucket
      region
      key
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModeluserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModeluserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModeluserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createEmployeedetail = /* GraphQL */ `
  mutation CreateEmployeedetail(
    $input: CreateEmployeedetailInput!
    $condition: ModelemployeedetailConditionInput
  ) {
    createEmployeedetail(input: $input, condition: $condition) {
      id
      UserId
      tag
      owner
      paygrade
      designation
      department
      joiningDate
      createdAt
      updatedAt
    }
  }
`;
export const updateEmployeedetail = /* GraphQL */ `
  mutation UpdateEmployeedetail(
    $input: UpdateEmployeedetailInput!
    $condition: ModelemployeedetailConditionInput
  ) {
    updateEmployeedetail(input: $input, condition: $condition) {
      id
      UserId
      tag
      owner
      paygrade
      designation
      department
      joiningDate
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmployeedetail = /* GraphQL */ `
  mutation DeleteEmployeedetail(
    $input: DeleteEmployeedetailInput!
    $condition: ModelemployeedetailConditionInput
  ) {
    deleteEmployeedetail(input: $input, condition: $condition) {
      id
      UserId
      tag
      owner
      paygrade
      designation
      department
      joiningDate
      createdAt
      updatedAt
    }
  }
`;
export const createTickets = /* GraphQL */ `
  mutation CreateTickets(
    $input: CreateTicketsInput!
    $condition: ModelTicketsConditionInput
  ) {
    createTickets(input: $input, condition: $condition) {
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
export const updateTickets = /* GraphQL */ `
  mutation UpdateTickets(
    $input: UpdateTicketsInput!
    $condition: ModelTicketsConditionInput
  ) {
    updateTickets(input: $input, condition: $condition) {
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
export const deleteTickets = /* GraphQL */ `
  mutation DeleteTickets(
    $input: DeleteTicketsInput!
    $condition: ModelTicketsConditionInput
  ) {
    deleteTickets(input: $input, condition: $condition) {
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
export const createReminders = /* GraphQL */ `
  mutation CreateReminders(
    $input: CreateRemindersInput!
    $condition: ModelRemindersConditionInput
  ) {
    createReminders(input: $input, condition: $condition) {
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
export const updateReminders = /* GraphQL */ `
  mutation UpdateReminders(
    $input: UpdateRemindersInput!
    $condition: ModelRemindersConditionInput
  ) {
    updateReminders(input: $input, condition: $condition) {
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
export const deleteReminders = /* GraphQL */ `
  mutation DeleteReminders(
    $input: DeleteRemindersInput!
    $condition: ModelRemindersConditionInput
  ) {
    deleteReminders(input: $input, condition: $condition) {
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
export const createMeetings = /* GraphQL */ `
  mutation CreateMeetings(
    $input: CreateMeetingsInput!
    $condition: ModelMeetingsConditionInput
  ) {
    createMeetings(input: $input, condition: $condition) {
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
export const updateMeetings = /* GraphQL */ `
  mutation UpdateMeetings(
    $input: UpdateMeetingsInput!
    $condition: ModelMeetingsConditionInput
  ) {
    updateMeetings(input: $input, condition: $condition) {
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
export const deleteMeetings = /* GraphQL */ `
  mutation DeleteMeetings(
    $input: DeleteMeetingsInput!
    $condition: ModelMeetingsConditionInput
  ) {
    deleteMeetings(input: $input, condition: $condition) {
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
