const express = require('express');
const controller = require('../controllers/invitation.controller');
const router = express.Router();
const auth = require('../middlewares/auth');
const {check, validationResult} = require('express-validator');

router.post('/invite',
    [
        check('event_id')
            .exists()
            .withMessage('event id is required'),
        check("users.*.user_id")
            .not()
            .isEmpty()
            .withMessage('user id is required'),
        check("users.*.email")
            .not()
            .isEmpty()
            .withMessage('email is required')
    ], controller.invite);

module.exports = router;