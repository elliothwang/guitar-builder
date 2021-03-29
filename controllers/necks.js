const Guitar = require('../models/guitar');

module.exports = {
  create
};

function create () {
  Guitar.findById(req.params.id, function (err, guitar) {
    guitar.neck.push(req.body);
    guitar.save(function(err) {
      res.redirect(`/guitars/${guitar._id}`);
    });
  });
};