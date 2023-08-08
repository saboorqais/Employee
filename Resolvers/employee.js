async function getEmployee(parent, args, context) {
    const { id } = args;
    const result = await context.client.query('SELECT * FROM employee WHERE id = $1', [id]);
    return result.rows[0];
}
async function listEmployees(parent, args, context) {

    // Use the PostgreSQL query here to fetch the list of employees
    const result = await context.client.query('SELECT * FROM employee');
    return result.rows;
}

async function createEmployee(parent, args, context) {
    const { input } = args;
    // Use the PostgreSQL query to insert a new employee

    const result = await context.client.query(
        'INSERT INTO employee (name, job, department, salary, hire_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [input.name, input.job, input.department, input.salary, input.hire_date]
    );
    return result.rows[0];
}

async function updateEmployee(parent, args, context) {
    const { id, input } = args;
    // Use the PostgreSQL query to update the employee
    const result = await context.client.query(
        'UPDATE employee SET name = $1, job = $2, department = $3, salary = $4, hire_date = $5 WHERE id = $6 RETURNING *',
        [input.name, input.job, input.department, input.salary, input.hire_date, id]
    );
    return result.rows[0];
}
async function deleteEmployee(parent, args, context) {
    const { id } = args;
    // Use the PostgreSQL query to delete the employee
    const result = await context.client.query(
        'DELETE FROM employee WHERE id = $1',
        [id]
    );
    // Check if any rows were affected (deletion successful)
    return result.rowCount > 0;
}

module.exports = {
    updateEmployee,
    deleteEmployee
    , createEmployee
    , listEmployees
    , getEmployee
}