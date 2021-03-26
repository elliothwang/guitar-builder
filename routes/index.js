var express = require('express');
var router = express.Router();
var guitarCtrl = ('../controllers/guitar');

/* GET home page. */
router.get('/', guitarCtrl.index);

module.exports = router;
