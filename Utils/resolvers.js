// resolvers.js

  
  const resolvers = {
    Query: {
      getEmployee: (parent, {id}) => employees.find(employee => employee.id === id),
      listEmployees: async (parent, args, context) => {
        console.log(context)
        // Use the PostgreSQL query here to fetch the list of employees
        const result = await context.client.query('SELECT * FROM employee');
        return result.rows;
    }}
  };
  
  module.exports = resolvers;
  