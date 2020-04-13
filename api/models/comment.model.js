const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = new mongoose.Schema({
    event_id: {
        type: Schema.Types.ObjectId,
        ref: "events"
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    user_name: {
        type: String
    },
    comment: {
        type: String
    }
});
const Comment = mongoose.model('comments', CommentSchema);

module.exports = Comment;
