const mongoose = require('mongoose');

// criando uma collection
const schema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String
});

const Model = mongoose.model('customers', schema);

module.exports = Model;