// schema.js

const { gql } = require('graphql-tag')
const typeDefs = gql`
  type Employee {
    id: ID!
    name: String!
    job: String!
    department: String!
    salary: Float!
    hire_date: String!
  }

  type Query {
    getEmployee(id: ID!): Employee
    listEmployees: [Employee]
  }
`;

module.exports = typeDefs;
