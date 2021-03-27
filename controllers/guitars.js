const Guitar = require('../models/guitar');

// have to use this somewhere in index or show or something
// req.body.user = req.user._id

module.exports = {
  index
};

function index (req, res) {
  res.send("home page");
  // res.render('index', {title : "Home"})
};
