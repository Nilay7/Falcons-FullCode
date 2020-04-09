var express = require('express');
var router = express.Router();
var payController = require('../controllers/payment.controller');
var auth = require('../middlewares/auth');

router.post('/makepayment', payController.pay);

router.get('/success', payController.success);

router.get('/cancel', payController.cancel);

module.exports = router;