require('dotenv').config(); // Load environmental variables from .env file
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { ApolloServer } = require("@apollo/server")
const { expressMiddleware } = require("@apollo/server/express4")
const resolvers = require("./Utils/resolvers")
const typeDefs = require("./models/employee")
const client = require("./DatabaseClient/Client")




async function StartServer() {
    const app = express();
  
    client.connect().then((res) => { console.log("Connected to Database") }).catch(err => console.log(err))
 
    const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers})
    // Middleware
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json())
    app.use(cors()); 

    await server.start()



    app.use("/graphql", expressMiddleware(server,{
        context: ({ req }) => {
            console.log('DB client'); 
            return { client:client }   }
    }))


    const port = 3001
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
}

StartServer();