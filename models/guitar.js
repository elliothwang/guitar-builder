const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content : String,
  user : {
    type : Schema.Types.ObjectId, ref : 'User'
  },
  userName : String,
  userAvatar : String
}, {
  timestamps : true
});

// embedded schemas (neck & body)
const bodySchema = new Schema({
  bodyType : {
    type : String,
    // enum : ['Dreadnought', 'Grand Auditorium', 'Parlour', 'Classical'],
    enum : ['Grand Auditorium'],
    // default : 'Dreadnought'
    default : 'Grand Auditorium'
  },
  topWood : {
    type: String,
    // enum : ['Cedar','Spruce', 'Mahogany', 'Maple'],
    enum : ['Cedar','Mahogany', 'Spruce'],
    default : 'Cedar'
  },
  // sideWood : {
  //   type: String,
  //   // enum : ['Mahogany', 'Spruce', 'Maple', 'Koa', 'Rosewood', 'Walnut'],
  //   enum : ['Mahogany','Spruce', 'Cedar'],
  //   default : 'Mahogany'
  // },
  // backWood : {
  //   type: String,
  //   // enum : ['Mahogany','Spruce', 'Cedar', 'Maple'],
  //   enum : ['Mahogany','Spruce', 'Cedar'],
  //   default : 'Mahogany'
  // }
  sideAndBackWood : {
    type: String,
    enum : ['Mahogany','Spruce', 'Cedar'],
    default : 'Mahogany'
  }
}, { 
  timestamps: true 
});

const neckSchema = new Schema({
  neckWood : {
    type: String,
    // enum : ['Rosewood', 'Mahogany', 'Maple', 'Cedar, 'Ebony', 'Walnut'],
    enum : ['Rosewood', 'Mahogany', 'Maple'],
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
  userAvatar : String,
  comments : [commentSchema]
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Guitar', guitarSchema);