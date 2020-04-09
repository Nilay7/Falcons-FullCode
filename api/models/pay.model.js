var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

const paySchema = new Schema ({
    userId: {type: Schema.Types.ObjectId, ref: 'users'},
    firstname: String,
    lastname: String,
    eventId: {type: Schema.Types.ObjectId, ref: 'events'},
    date: {type: Date, default: Date.now()},
    amount: Number
});

module.exports = mongoose.model('pay', paySchema);