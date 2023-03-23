const { Client } = require('../models');

const resolvers = {
  Query: {
    clients: async () => {
      return Client.find({});
    },
  },
};

module.exports = resolvers;
