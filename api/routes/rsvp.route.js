const express = require('express');
const controller = require('../controllers/rsvp.controller');
const router = express.Router();
const auth = require('../middlewares/auth');
const {check, validationResult} = require('express-validator');

router.get('/getrsvp/:id', controller.getRsvp);

router.post('/confirm', [
    check('event_id')
        .exists()
        .withMessage('event id is required'),
    check('response')
        .exists()
        .withMessage('response is required'),
    check('no_of_guests')
        .exists()
        .withMessage('no_of_guests is required')
], auth, controller.confirmRsvp);

router.delete('/cancel/:id', auth, controller.cancelRsvp);

router.post('/update/:rsvpId', [
    check('response')
        .exists()
        .withMessage('response is required'),
], auth, controller.updateRsvp);

module.exports = router;
