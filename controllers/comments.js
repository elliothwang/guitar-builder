const Guitar = require('../models/guitar');

module.exports = {
  create,
  delete : deleteComment
};

function create (req, res) {
  Guitar.findById(req.params.id, function (err, guitar) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    guitar.comments.push(req.body);
    guitar.save(function (err) {
      res.redirect(`/guitars/${guitar._id}`);
    });
  });
};

function deleteComment (req, res) {
  Guitar.findOne({'reviews._id': req.params.id}).then(function(guitar) {
    const comment = guitar.comments.id(req.params.id);
    if (!guitar.user.equals(req.user._id)) return res.redirect(`/guitars/${guitar._id}`);
    comment.remove();
    guitar.save(function (err) {
      res.redirect(`/guitars/${guitar._id}`);
    });
  });
};