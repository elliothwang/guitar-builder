const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// embedded schemas (neck & body)
const bodySchema = new Schema({
  bodyType : {
    type : String,
    enum : ['Dreadnought', 'Auditorium', 'Parlour', 'Classical'],
    default : 'Dreadnought',
  },
  topWood : {
    type: String,
    enum : ['Cedar','Spruce', 'Mahogany', 'Maple'],
    default : 'Cedar'
  },
  sideWood : {
    type: String,
    enum : ['Mahogany', 'Spruce', 'Maple', 'Koa', 'Rosewood', 'Walnut'],
    default : 'Mahogany'
  },
  backWood : {
    type: String,
    enum : ['Mahogany','Spruce', 'Cedar', 'Maple'],
    default : 'Mahogany'
  }
}, { 
  timestamps: true 
});

const neckSchema = new Schema({
  neckWood : {
    type: String,
    enum : ['Rosewood', 'Maple', 'Ebony', 'Walnut'],
    default : 'Rosewood'
  },
  positionMarkers : {
    type : String,
    enum: ['Yes', 'No'],
    default: 'Yes'
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
  body : bodySchema,
  neck : neckSchema,
  user : {
    type : Schema.Types.ObjectId, ref : 'User'
  },
  userName : String,
  userAvatar : String
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Guitar', guitarSchema);

