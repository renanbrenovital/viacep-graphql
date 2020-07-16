const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const ViaCEP = require('./datasources');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    viaCEP: new ViaCEP(),
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
