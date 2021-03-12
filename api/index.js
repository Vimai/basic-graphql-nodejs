const { ApolloServer } = require('apollo-server');

const UsersAPI = require('./user/datasource/user')
const userSchema = require('./user/schema/user.graphql')
const userResolvers = require('./user/resolvers/userResolvers')

const typeDefs = [userSchema]
const resolvers = [userResolvers]

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
   typeDefs,
   resolvers,
   dataSources: () => {
     return {
       usersAPI: new UsersAPI()
     }
   }
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

