var express = require('express');
var router = express.Router();
var guitarsCtrl = require('../controllers/guitars');
const isLoggedIn = require('../config/auth');

/* GET users listing. */
router.get('/', isLoggedIn, guitarsCtrl.allGuitars);
// complete index function & replace allGuitars w/ index for '/saved'
router.get('/saved', isLoggedIn, guitarsCtrl.allGuitars);
router.get('/new', isLoggedIn, guitarsCtrl.new);
router.get('/:id', isLoggedIn, guitarsCtrl.show);
router.post('/', isLoggedIn, guitarsCtrl.create);
router.delete('/:id', isLoggedIn, guitarsCtrl.delete);
// router.put('/:id', guitarsCtrl.update);

module.exports = router;