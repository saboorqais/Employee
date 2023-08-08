// resolvers.js
const {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
deleteEmployee } = require("../Resolvers/employee");


const resolvers = {
  Query: {
    getEmployee: getEmployee,
    getEmployees: getEmployees
  },
  Mutation: {
    createEmployee: createEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee
  },
};

module.exports = resolvers;
