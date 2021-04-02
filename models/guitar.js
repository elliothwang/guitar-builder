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

const bodySchema = new Schema({
  topWood : {
    type: String,
    enum : ['Cedar','Mahogany', 'Spruce'],
    default : 'Cedar'
  },

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
    enum : ['Rosewood', 'Mahogany', 'Maple'],
    default : 'Rosewood'
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