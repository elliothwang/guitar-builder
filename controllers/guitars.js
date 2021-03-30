const Guitar = require('../models/guitar');

module.exports = {
  index,
  new : newGuitar,
  show,
  create,
  delete : deleteGuitar,
  allGuitars
};

  // use req.query

function allGuitars (req, res) {
  // add a route for all guitars
  Guitar.find({}, function(err, guitars) {
    // nested find method
      // define userGuitars with "user : req.user.id"
    Guitar.find({user : req.user._id}, function (err, userGuitars) {
      res.render('guitars/index', {title : "All Guitars", guitars, userGuitars});
    });
  });
};

function index (req, res) {
  // responsible for most recently saved & all user's guitars
  // use req user id
  Guitar.find({}, function (err,) {
    // if (req.query.recent) find & show most recent guitar
    // recent guitar should have request query (recent : true)

  });
  
};

function newGuitar (req, res) {
  res.render('guitars/new', {title : "Create New Custom"});
};

function show (req, res) {
  Guitar.findById(req.params.id).then(function (err, guitar) {
    res.render('guitars/show', {title : "Guitar Details", guitar});
  });
};

function create (req, res) {
  let guitarData = {
    name : req.body.name,
    body : {
      // populate w data from req.body
      bodyType : req.body.bodyType,
      topWood : req.body.topWood,
      sideWood : req.body.sideWood,
      bottomWood : req.body.bottomWood,
    },
    neck : {
      neckWood : req.body.neckWood,
      positionMarkers : req.body.positionMarkers
    },
  }

  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  const guitar = new Guitar(guitarData);
  guitar.save(function (err) {
    if (err) return res.redirect('/guitars/new');
    res.redirect('/guitars');
  });
};

function deleteGuitar (req, res) {
  Guitar.findById(req.params.id).then(function (guitar) {
    if (!guitar.user.equals(req.user._id)) return res.redirect('/guitars');
    Guitar.findByIdAndDelete(req.params.id, function (err) {
      res.redirect('/guitars');
    });
  });
};