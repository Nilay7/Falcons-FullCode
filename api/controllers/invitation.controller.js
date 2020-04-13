const {check, validationResult} = require('express-validator');
const config = require('config');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.get('SENDGRID_API_KEY'));

exports.invite = function (req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        }

        const event_id = req.body.event_id;
        const users = req.body.users;

        users.forEach(function (user) {
            sendMail(user.email, event_id);
        });

        return res.status(200).json('Invitation sent!');
    } catch (e) {
        console.log('Error: ', e);
        return res.status(500).json('Error: ', e);
    }
};

function sendMail(email, event) {
    const msg = {
        to: email,
        from: config.get('myEmail'),
        subject: 'Event invitation',
        html: "<strong>You are invited to an event " + event + "</strong>",
    };

    (async () => {
        try {
            await sgMail.send(msg);
        } catch (err) {
            console.error(err.toString());
        }
    })();
}
