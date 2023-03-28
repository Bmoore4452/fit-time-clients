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

  input AddStats {
    sex: String
    age: Int
    height: Float
    weight: Float
    activity: String
    target: Float
  }

  type Stats {
    sex: String
    age: Int
    height: Float
    weight: Float
    activity: String
    target: Float
  }

  type Auth {
    token: ID!
    client: Client
  }

  type Query {
    clients: [Client]
    client(clientId: ID!): Client
  }

  type Mutation {
    addClient(
      username: String!
      email: String!
      password: String!
      name: String
      stats: AddStats
    ): Auth
    login(email: String!, password: String!): Auth
    updatePassword(email: String!, password: String!): Auth
    # updatePassword(email: String!): Auth
  }
`;

module.exports = typeDefs;
