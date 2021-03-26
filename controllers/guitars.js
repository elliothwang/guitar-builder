const Guitar = require('../models/guitar');

module.exports = {
  index
};

function index (req, res) {
  res.send("home page");
  // res.render('index', {title : "Home"})
};

