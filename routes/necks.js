var express = require('express');
var router = express.Router();
const necksCtrl = require('../controllers/necks');

router.post('/flights/:id/neck', necksCtrl.create);

module.exports = router;