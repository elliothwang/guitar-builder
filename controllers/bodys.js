module.exports = {
  create
};

function create () {
  Guitar.findById(req.params.id, function (err, guitar) {
    guitar.body.push(req.body);
    guitar.save(function(err) {
      res.redirect(`/guitars/${guitar._id}`)
    })
  })
};