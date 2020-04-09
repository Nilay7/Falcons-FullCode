const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectID,
        ref: 'users'
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    event_id: {
        type: Schema.Types.ObjectID,
        ref: 'events'
    },
    task: {
        type: String
    }
});

const Task = mongoose.model('delegation', TaskSchema);

module.exports = Task;