var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        olaMundo: String!
    }
`)

const resolver =  {
    olaMundo: (() => 'Olá Mundo!')
}

var app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
