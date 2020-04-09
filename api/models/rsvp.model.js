const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RsvpSchema = new mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    event_id: {
        type: Schema.Types.ObjectId,
        ref: 'events'
    },
    response: {
        type: Boolean
    },
    no_of_guests: {
        type: Number
    }
});
const Rsvp = mongoose.model('rsvp', RsvpSchema);

module.exports = Rsvp;
