module.exports = function (app) {
    app.use('/api/user', require('./user.route'));
    app.use('/api/rsvp', require('./rsvp.route'));
    app.use('/api/invitation', require('./invitation.route'));
    app.use('/api/delegation', require('./delegation.route'));
    app.use('/api/pay', require('./pay.route'));
    app.use('/api/comment', require('./comment.route'));
    app.use('/api/picture', require('./picture.route'));
    app.use('/api/event', require('./event.route'));
};
