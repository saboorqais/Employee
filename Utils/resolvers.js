// resolvers.js

const employees = [
    {
      id: "1",
      name: 'John Doe',
      job: 'Software Engineer',
      department: 'Engineering',
      salary: 80000,
      hire_date: '2022-01-15',
    },
    // ...other employee objects
  ];
  
  const resolvers = {
    Query: {
      getEmployee: (parent, {id}) => employees.find(employee => employee.id === id),
      listEmployees: () => employees,
    },
  };
  
  module.exports = resolvers;
  