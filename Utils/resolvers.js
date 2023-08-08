// resolvers.js
const {
  listEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
deleteEmployee } = require("../Resolvers/employee");


const resolvers = {
  Query: {
    getEmployee: getEmployee,
    listEmployees: listEmployees
  },
  Mutation: {
    createEmployee: createEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee
  },
};

module.exports = resolvers;
