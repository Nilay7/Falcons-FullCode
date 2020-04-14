const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EventSchema = new mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    attendees: [
        {
            type: Schema.Types.ObjectId,
            ref: "users"
        }
    ],
    attendees_count: {
        type: Schema.Types.Number
    },
    rsvp: [
        {
            type: Schema.Types.ObjectId,
            ref: "rsvps"
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "comments"
        }
    ],
    event_picture: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    type: {
        type: String
    },
    address: {
        type: String
    },
    address_latitude: {
        type: Schema.Types.Decimal128
    },
    address_longitude: {
        type: Schema.Types.Decimal128
    },
    start_date: {
        type: Date
    },
    end_date: {
        type: Date
    }
});
const Event = mongoose.model('events', EventSchema);

module.exports = Event;
