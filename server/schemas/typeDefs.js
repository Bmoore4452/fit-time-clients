const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Client {
    _id: ID!
    username: String!
    email: String!
    password: String!
    name: String
    stats: [String]
  }

  type Stats {
    _id: ID
    age: Int
    height: Float
    weight: Float
  }
`;

module.exports = typeDefs;
