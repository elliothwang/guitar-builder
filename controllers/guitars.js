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
  Guitar.find({}, function(err, guitars) {
    res.render('index', {title : "Guitar Home", guitars});
  });
};

function newGuitar (req, res) {
  res.render('guitars/new', {title : "Create New Custom"})
};

function show (req, res) {
  res.render('guitars/show', {title : "Show All Customs"})
}

function create (req, res) {
  const guitar = new Guitar(req.body);
  guitar.save(function (err) {
    if (err) return res.redirect('/guitars/new');
  });
  res.redirect('/guitars/index');
};