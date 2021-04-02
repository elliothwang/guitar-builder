const Guitar = require('../models/guitar');

module.exports = {
  create,
  update,
  delete : deleteComment,
  edit
};

function create (req, res) {
  Guitar.findById(req.params.id, function (err, guitar) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    guitar.comments.push(req.body);
    guitar.save(function (err) {
      if (err) console.log(err);
      res.redirect(`/guitars/${guitar._id}`);
    });
  });
};

function update (req, res) {
  Guitar.findOne({'comments._id': req.params.id}).then(function(guitar) {
    console.log(guitar);
    let comment = guitar.comments.id(req.params.id);
    Object.assign(comment, req.body);
    guitar.save(function(err) {
      res.redirect(`/guitars/${guitar._id}`);
    });
  });
};

function deleteComment (req, res) {
  Guitar.findOne({'guitars._id': req.params.id}, function (err, guitar) {
      if (!guitar.user.equals(req.user._id)) return res.redirect(`/guitars/${guitar._id}`);
      guitar.comments.remove(req.params.id);
      guitar.save(function (err) {
        res.redirect(`/guitars/${guitar._id}`);
      });
  });
};

function edit (req, res) {
  Guitar.findOne({'comments._id': req.params.id}).then(function(guitar) {
    let comment = guitar.comments.id(req.params.id);
    console.log(comment);
    res.render('comments/commentEdit', {title : "Edit Comment", comment});
  });
};