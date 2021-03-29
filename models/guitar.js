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
}, { 
  timestamps: true 
});

const neckSchema = new Schema({
  wood : {
    type: String,
    enum : ['Maple', 'Ebony', 'Rosewood', 'Walnut'],
    default : 'Rosewood'
  },
  positionMarkers : {
    type : Boolean,
    default : true
  }
}, { 
  timestamps: true 
});

// parent schema guitarSchema
const guitarSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  body : [bodySchema],
  neck : [neckSchema],
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Guitar', guitarSchema);