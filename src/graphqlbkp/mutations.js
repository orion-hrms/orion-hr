/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
      id
      name
      tag
      owner
      paygrade
      designation
      lastActivity
      empId
      department
      joiningDate
      createdAt
      updatedAt
    }
  }
`;
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
      id
      name
      tag
      owner
      paygrade
      designation
      lastActivity
      empId
      department
      joiningDate
      createdAt
      updatedAt
    }
  }
`;
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
      id
      name
      tag
      owner
      paygrade
      designation
      lastActivity
      empId
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
