const { Schema, model } = require('mongoose');

const statsSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
  },
  sex: {
    type: String,
  },
  age: {
    type: Number,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  activity: {
    type: String,
  },
  target: {
    type: Number,
  },
});

const Stats = model('Stats', statsSchema);


module.exports = Stats;
