const express = require('express');
const { check } = require('express-validator');
const eventController = require('../controllers/event.controller');
const multer = require('multer');

var storage = multer.diskStorage({ 
    destination: './uploads', 
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    } 
});

var upload = multer({ storage: storage });
/**
 * Express router to mount event related functions on.
 * @type {object}
 * @const
 */
const router = express.Router();

/**
 * Route to fetch top 10 events by no of attendees
 */
router.get('/top_10', eventController.fetchTop10Event);

/**
 * Route to fetch any event details
 */
router.get('/:event_id', eventController.fetchEvent);

/**
 * Route to create new events
 */
router.post('/addevent',
    upload.single('image'),
    eventController.createNewEvent
);

/**
 * Route to delete an event by updating active to false
 */
router.delete('/removeevent', eventController.deleteEvent);

/**
 * route to update event details
 */
router.post('/updateevent', eventController.updateEvent);

router.get('/get/byname', eventController.getEventByname);

module.exports = router;
