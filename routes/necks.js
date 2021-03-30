var express = require('express');
var router = express.Router();
const necksCtrl = require('../controllers/necks');

router.post('/necks/:id/neck', necksCtrl.create);

module.exports = router;