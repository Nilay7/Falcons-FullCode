const Comment = require('../models/comment.model');
const Event = require('../models/event.model');

exports.addComment  = async (request, response) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(422).json({ errors: errors.array() });
        }
        const newComment = new Comment({
            event_id: request.body.event_id,
            user_id: request.user,
            comment: request.body.comment
        });

        const newCommentFromDb = await newComment.save()
            .then((result) => {
                Event.findById(newComment.event_id , (err, event) => {
                    if (event) {
                        // The below two lines will add the newly saved comment
                        // ObjectID to the the Event's comment array field
                        event.comments.push(newComment);
                        event.save();
                        response.status(200).send(newCommentFromDb);
                    }
                });
            })
            .catch((error) => {
                response.status(500).send(error);
            });
        if (newCommentFromDb == null){
            return response.status(500).send('Event cannot be saved to Database');
        }
    } catch (error) {
        response.status(500).send(error);
    }
};