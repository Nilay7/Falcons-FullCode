var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PictureSchema = new Schema({
    filename: String,
    event_id: {
        type: Schema.Types.ObjectId, ref: 'events'
    },
    user_id: {
        type: Schema.Types.ObjectId, ref: 'users'
    }
});
var Picture = mongoose.model('picture', PictureSchema);

module.exports = Picture;