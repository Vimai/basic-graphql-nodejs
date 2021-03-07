const { ApolloServer } = require('apollo-server');

const userSchema = require('./user/schema/user.graphql')

const users = [
    {
      "id": 2,
      "nome": "Ana Torre",
      "ativo": true,
      "email": "a@a.com",
      "role": 1
    },
    {
      "id": 2,
      "nome": "Gabriel Costa",
      "ativo": true,
      "email": "g@g.com",
      "role": 1
    },
  ];

const typeDefs = [userSchema]
  
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

