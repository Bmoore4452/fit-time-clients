const { Schema, model } = require('mongoose');
const Stats = require('./Stats');

const clientSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
      },
    },
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    trim: true,
  },
  stats: [Stats.schema],
});

const Client = model('Client', clientSchema);

module.exports = Client;
