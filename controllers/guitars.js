const Guitar = require('../models/guitar');

module.exports = {
  index,
  new : newGuitar,
  show,
  create,
  delete : deleteGuitar,
  allGuitars,
  update
};

  // use req.query

function allGuitars (req, res) {
  // add a route for all guitars
  Guitar.find({}, function(err, guitars) {
    // nested find method
      // define userGuitars with "user : req.user.id"
    Guitar.find({user : req.user._id}, function (err, userGuitars) {
    // if (req.query.recent) find & show most recent guitar
    // recent guitar should have request query (recent : true)
      res.render('guitars/index', {title : "All Guitars", guitars, userGuitars});
    });
  });
};

function index (req, res) {
  Guitar.find({user : req.user._id}).then(function (userGuitars) {
    console.log(req.user._id);
    res.render('guitars/userIndex', {title : "User Guitars", userGuitars});
  });
};

function newGuitar (req, res) {
  res.render('guitars/new', {title : "Create New Custom"});
};

function show (req, res) {
  Guitar.findById(req.params.id).then(function (guitar) {
    console.log(req.params.id);
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
    user : req.user._id,
    userName : req.user.name,
    userAvatar : req.user.avatar
  };

  const guitar = new Guitar(guitarData);
  guitar.save(function (err) {
    if (err) return res.redirect('/guitars/new');
    res.redirect('/guitars');
    console.log(guitar);
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

function update (req, res) {
  Guitar.findById(req.params.id).then(function (guitar) {
    const updatedGuitar = Object.assign(guitar, req.body);
    Guitar.findByIdAndUpdate(req.params.id, updatedGuitar, function (err, guitar) {
      res.redirect(`/guitars/${req.params.id}`);
    });
  });
};