const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// embedded schemas (neck & body)
const bodySchema = new Schema({
  model : {
    type : String,
    enum : ['Dreadnought', 'Auditorium', 'Parlour', 'Classical'],
    default: 'Dreadnought',
  },
  topWood : {
    type: String,
    enum : ['Spruce', 'Cedar', 'Mahogany', 'Maple'],
    default : 'Cedar'
  },
  sideWood : {
    type: String,
    enum : ['Spruce', 'Mahogany', 'Maple', 'Koa', 'Rosewood', 'Walnut'],
    default : 'Mahogany'
  },
  backWood : {
    type: String,
    enum : ['Spruce', 'Cedar', 'Mahogany', 'Maple'],
    default : 'Mahogany'
  }
});

// parent schema guitarSchema
const guitarSchema = new Schema({
  name : String,
  body : [bodySchema],
  neck : [neckSchema]
})

  // neck : [neckSchema]
  // body : [bodySchema]
  

module.exports = mongoose.model('Guitar', guitarSchema);