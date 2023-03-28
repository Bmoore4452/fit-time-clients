const db = require('../config/connection');
const { Client, Stats } = require('../models');

const clientData = require('./clientData.json');
const statsData = require('./statsData.json');

db.once('open', async () => {
  await Client.deleteMany({});
  await Stats.deleteMany({});

  const clients = await Client.insertMany(clientData);
  const stats = await Stats.insertMany(statsData);

  for (let i = 0; i < clients.length; i++) {
    const temp = clients[i];
    temp.stats.push(stats[i])
    await temp.save();
  }

  console.log('clients added');
  process.exit(0);
});
