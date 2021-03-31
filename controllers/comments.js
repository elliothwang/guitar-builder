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

    
  })
};

function deleteComment (req, res) {

};