const Guitar = require('../models/guitar');

// have to use this somewhere in index or show or something
// req.body.user = req.user._id

module.exports = {
  index,
  new: newGuitar,
  show,
  create
};

function index (req, res) {
  res.render('index', {title : "Guitar Home"})
};

function newGuitar (req, res) {
  res.render('guitars/new', {title : "Create New Custom"})
};

function show (req, res) {
  res.render('guitars/show', {title : "Show All Customs"})
}

function create (req, res) {
  res.render(`/guitars/${guitar._id}`, {title : "Create Guitar in DB"})
};