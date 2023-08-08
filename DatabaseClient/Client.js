const { Client } = require("pg")

const client = new Client({
    user: process.env.DATABASE_USERNAME,
    host: process.env.HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.PASSWORD,
    port: process.env.PORT_NUMBER
}) 

module.exports = client; 