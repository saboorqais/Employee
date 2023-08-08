
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { ApolloServer } = require("@apollo/server")
const { expressMiddleware } = require("@apollo/server/express4")
const resolvers = require("./Utils/resolvers")
const typeDefs = require("./models/employee")
const { Client } = require("pg")




async function StartServer() {
    const app = express();
    const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers })
    const userRoutes = require('./routes/user');

    const client = new Client({
        user: "postgres",
        host: "localhost",
        database: "Organization",
        password: "admin",
        port: 5432
    }) 
    client.connect().then((res) => { console.log("Connected to Database") }).catch(err => console.log(err))
 
    client.query("select * from Employee").then(res=>{console.log(res.rows)}).catch(err=>{console.log(err)})

    // Middleware
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json())
    app.use(cors());

    await server.start()


    // routes
    app.use("/user", userRoutes);
    app.use("/graphql", expressMiddleware(server))


    const port = 3001
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
}

StartServer();