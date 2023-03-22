const { Client } = require('../models');

const resolvers = {
  Query: {
    name: async () => {
      return Client.find({});
    },
  },
};

module.exports = resolvers;
