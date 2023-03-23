const db = require('../config/connection');
const { Client } = require('../models');

const clientData = require('./clientData.json');

db.once('open', async () => {
  await Client.deleteMany({});

  const clients = await Client.insertMany(clientData);

  for (let i = 0; i < clients.length; i++) {
    const temp = clients[i];
    await temp.save();
  }

  console.log('clients added');
  process.exit(0);
});
