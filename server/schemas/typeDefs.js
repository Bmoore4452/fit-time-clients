const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Client {
    _id: ID!
    username: String!
    email: String!
    password: String!
    name: String
    stats: [Stats]
  }

  type Stats {
    age: Int
    height: Float
    weight: Float
  }

  type Query {
    clients: [Client]
  }
`;

module.exports = typeDefs;
