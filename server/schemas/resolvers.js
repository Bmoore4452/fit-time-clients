const { Client } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const bcrypt = require('bcrypt');

const resolvers = {
  Query: {
    clients: async () => {
      return Client.find({});
    },
    client: async (parent, { clientId }) => {
      return Client.findOne({ _id: clientId });
    },
  },

  Mutation: {
    addClient: async (parent, args) => {
      const saltRounds = 10;
      const client = await Client.create(args);
      client.password = await bcrypt.hash(client.password, saltRounds);
      const token = signToken(client);
      return { token, client };
    },
    login: async (parent, { email, password }) => {
      const client = await Client.findOne({ email });

      if (!client) {
        throw new AuthenticationError('No Client');
      }

      const correctPW = await client.isCorrectPassword(password);
      if (!correctPW) {
        throw new AuthenticationError('Incorrect Password');
      }
      const token = signToken(client);
      return { token, client };
    },
    // updatePassword: async (parent, { email, password }) => {
    //   const client = await Client.findOneAndUpdate({ email }, { password });
    //   console.log(client);
    //   const token = signToken(client);
    //   return { token, client };
    // },

    updatePassword: async (parent, { email, password }) => {
      const saltRounds = 10;
      const client = await Client.findOneAndUpdate({ email }, { password });
      client.password = await bcrypt.hash(client.password, saltRounds);
      console.log(client);
      const token = signToken(client);
      return { token, client };
    },
  },
};

module.exports = resolvers;
