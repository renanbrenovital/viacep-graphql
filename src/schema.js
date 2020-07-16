const { gql } = require('apollo-server');

const typeDefs = gql`
  type Endereco {
    cep: String
    logradouro: String
    complemento: String
    bairro: String
    localidade: String
    uf: String
    unidade: String
    ibge: String
    gia: String
  }

  type Query {
    endereco(cep: String!): Endereco
  }
`;

module.exports = typeDefs;