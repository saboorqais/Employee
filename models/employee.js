// schema.js

const { gql } = require('graphql-tag')
const typeDefs = gql`
  type Employee {
    name: String!
    job: String!
    department: String!
    salary: Float!
    hire_date: String!
  }

  type Query {
    getEmployee(id: ID!): Employee
    getEmployees: [Employee]
  }

  input EmployeeInput {
    name: String!
    job: String!
    department: String!
    salary: Float!
    hire_date: String!
  }

  type Mutation {
    createEmployee(input: EmployeeInput!): Employee
    updateEmployee(id: ID!, input: EmployeeInput!): Employee
    deleteEmployee(id: ID!): Boolean  
}
  
`;

module.exports = typeDefs;
