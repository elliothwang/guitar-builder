var express = require('express');
var router = express.Router();
const bodysCtrl = require('../controllers/bodys');

router.post('/flights/:id/body', bodysCtrl.create);

module.exports = router;