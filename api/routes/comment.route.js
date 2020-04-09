const express = require('express');
const commentController = require('../controllers/comment.controller');
const auth = require('../middlewares/auth');

/**
 * Express router to mount event related functions on.
 * @type {object}
 * @const
 */
const router = express.Router();

router.post('/addcomment', auth, commentController.addComment);

module.exports = router;