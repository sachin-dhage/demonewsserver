// Import section
import express from 'express';
import { ApolloServer } from "apollo-server-express";

// Import graphQL types
import graphQLTypes from './graphQL/types';

// Import graphQL resolvers
import graphQLResolvers from './graphQL/resolvers';

//console.log(schema);

// Set the port number
const PORT = 3000;

// Set the end point 
const PATH = "/news";

// Initialize the web server
const webServer = express();

// Initialize the graphql server
const graphQLServer = new ApolloServer({
    typeDefs : graphQLTypes,
    resolvers : graphQLResolvers,
    //introspection: true,
    //playground: true
    
});


graphQLServer.applyMiddleware({
    app: webServer, 
    path:PATH
});

webServer.listen(PORT, () => {
    console.log(`GraphQL Server is now running on http://localhost:${PORT}${PATH}`);
    console.log(`Go to http://localhost:${PORT}${PATH} to run queries!`);
    console.log('------------------------------------------------------');
  });