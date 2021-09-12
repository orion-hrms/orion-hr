/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
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
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
export const listTicketss = /* GraphQL */ `
  query ListTicketss(
    $filter: ModelTicketsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTicketss(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const listReminderss = /* GraphQL */ `
  query ListReminderss(
    $filter: ModelRemindersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReminderss(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const listMeetingss = /* GraphQL */ `
  query ListMeetingss(
    $filter: ModelMeetingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeetingss(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
