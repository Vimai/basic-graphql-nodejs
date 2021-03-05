const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        olaMundo: String!
    }
`)

const resolver =  {
    olaMundo: (() => 'Olá Mundo!')
}

graphql(schema, '{ olaMundo }', resolver).then((response) => {
    console.log(response);
});


// const server = New AppoloServer({typeDefs: schema, resolvers})

// const app = express