const {check, validationResult} = require('express-validator');
let Delegation = require('../models/delegation.model.js');
var User = require('../models/user.model');
var Event = require('../models/event.model');

exports.getDelegations = function (req, res) {
    Delegation.find({event_id: req.params.id})
        .then(task => res.json(task))
        .catch(err => req.status(400).json('Error: ', err));
};

exports.addDelegation = function (req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        }

        const user_id = req.body.user_id;
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const event_id = req.body.event_id;
        const task = req.body.task;

        const newDelegation = new Delegation({
            user_id,
            first_name,
            last_name,
            event_id,
            task
        });

        var userExists = User.findById(user_id);
        var eventExists = Event.findById(event_id);

        if (userExists && eventExists) {
            newDelegation.save()
                .then(() => res.json('Delegation added.!'))
                .catch(err => res.status(400).json('Error: ' + err));
        } else {
            return res.status(500).send('Error: User or Event does not exists.');
        }
    } catch (e) {
        console.log('Error: ', e);
        return res.status(500).json('Error: ' + e);
    }
};

exports.deletedelegation = function (req, res) {
    Delegation.findByIdAndDelete(req.params.id)
        .then(() => res.json('Delegation deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
};

