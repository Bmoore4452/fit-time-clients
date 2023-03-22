const { Schema, model } = require('mongoose');

const statsSchema = new Schema({
  age: {
    type: Number,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
});

const Stats = model('Stats', statsSchema);

module.exports = Stats;
