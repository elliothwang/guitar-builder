var express = require('express');
var router = express.Router();
var guitarsCtrl = require('../controllers/guitars');
const isLoggedIn = require('../config/auth');

/* GET users listing. */
router.get('/', guitarsCtrl.index);
router.get('/new', isLoggedIn, guitarsCtrl.new);
router.get('/:id', isLoggedIn, guitarsCtrl.show);
router.post('/', isLoggedIn, guitarsCtrl.create);

// router.get('/saved', function (req, res) {
//   res.send('See your saved customs page');
// });

// router.put('/:id', guitarsCtrl.update);
// router.delete('/:id', guitarsCtrl.delete);

module.exports = router;