const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// embedded schemas (neck & body)

// parent schema guitarSchema

  // neck : [neckSchema]
  // body : [bodySchema]
  

module.exports = mongoose.model('Guitar', guitarSchema);