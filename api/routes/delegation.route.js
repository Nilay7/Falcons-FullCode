const express = require('express');
const controller = require('../controllers/delegation.controller');
const router = express.Router();
const auth = require('../middlewares/auth');
const {check, validationResult} = require('express-validator');

router.get('/listdelegation/:id', controller.getDelegations);

router.post('/adddelegation', [
    check('first_name')
        .exists()
        .withMessage('First name is required'),
    check('last_name')
        .exists()
        .withMessage('Last name is required'),
    check('event_id')
        .exists()
        .withMessage('Event id is required'),
    check('task')
        .exists()
        .withMessage('Task is required')
], auth, controller.addDelegation);

router.delete('/deletedelegation/:id', auth, controller.deletedelegation);

module.exports = router;