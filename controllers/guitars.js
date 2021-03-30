const Guitar = require('../models/guitar');

// have to use this somewhere in index or show or something
// req.body.user = req.user._id

module.exports = {
  index,
  new : newGuitar,
  show,
  create,
  delete : deleteGuitar
};

function index (req, res) {
  // if route is /index
  Guitar.find({}, function(err, guitars) {
    // nested find function
      // define userGuitars
    Guitar.find({}, function (err, userGuitars) {
      res.render('guitars/index', {title : "All Guitars", guitars, userGuitars});
    });
  });
};

function newGuitar (req, res) {
  res.render('guitars/new', {title : "Create New Custom"});
};

function show (req, res) {
  res.render('guitars/show', {title : "Guitar Details", guitars});
};

function create (req, res) {
  req.body.user = req.user._id;
  console.log(req.body.user);
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  const guitar = new Guitar(req.body);
  guitar.save(function (err) {
    if (err) return res.redirect('/guitars/new');
    res.redirect('/guitars');
  });
};

function deleteGuitar (req, res) {
  Guitar.findOne({'guitars._id': req.params.id}).then(function(guitar) {
    // console.log(guitar)
    // if (!guitar.user.equals(req.user._id)) return res.redirect('/guitars');
    Guitar.findByIdAndDelete(req.params.id, function (err) {
      res.redirect('/guitars');
    });
  });
};