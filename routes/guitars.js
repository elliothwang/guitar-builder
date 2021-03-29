var express = require('express');
var router = express.Router();
var guitarCtrl = ('../controllers/guitar');

/* GET users listing. */
// router.get('/', guitarCtrl.index);
router.get('/', function (req, res) {
  res.send("guitars home page");
});
// router.get('/new', isLoggedIn, moviesCtrl.new);
router.get('/new', function (req, res) {
  res.send("make a custom guitar page");
});

// router.get('/:id', isLoggedIn, moviesCtrl.show);
// router.post('/', isLoggedIn, moviesCtrl.create);

router.get('/saved', function (req, res) {
  res.send('See your saved customs page');
});

module.exports = router;
