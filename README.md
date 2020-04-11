# Event Management System

## Team: Falcons
#### Harshil Patel, Viraj Sheth, Rakshit Solanki and Nilay Patel

### About the project
Event Management System is the application that is aimed at managing many task which ususally requires use of mulitple applications. 

* Users can create an event or can join to an existing event through our application.
* It is very easy to invite people for an event with all the details about the event like location and times can be seen.
* Participants can RSVP their status which is very usuful for event organizers to manage all the guests.
* Users can also donate or contribute money via our Paypal gateway.
* Users can share the event pictures and also can comment on the event via our application.

### Application link and login credentials

### Link of Backend: 

For Login

https://falcons-backend.herokuapp.com/api/user/login

#### Login Credentials

`Email: patelnilay33@gmail.com`
`Password: 123456`

##### Feel Free to register yourself!

### Individual Contribution to Frontend Development

#### Nilay Patel

* Paypal Payment Gateway
`client/src/components/payment/payment.jsx`
`client/src/components/payment/payment-sandbox-link.jsx`
`client/src/components/payment/payment-finish.jsx`

`/payment`
`/success`

* Login
`client/src/components/login/login.jsx`

`/login`

* Update Password
`client/src/components/updatepassword/updatepassword.jsx`

`/updatepassword`

#### Harshil Patel

* Edit Profile
`client/src/components/edit-profile/EditProfile.js`

`/edit-profile`

* Event Invitation
`client/src/components/event-invitation/event-invitation.js`

`/invite`

* RSVP
`client/src/components/rsvp/Rsvp.js`

`/rsvp`

* Task Delegation
`client/src/components/task-delegation/TaskDelegation.js`

`/delegation`


### Contribution

| Feature       | Frontend (React) | Backend (Node) |
| :------------- | -------------:| -----:|
| **Rakshit** |
| Event      | src/components/event/event.css src/components/event/event-create.js src/components/event/event-view.js src/components/event/MapContainer.js | api/controllers/event.controller.js api/models/event.model.js api/routes/event.route.js |
| Google Maps API      | src/components/event/MapContainer.js | api/controllers/event.controller.js |
| Comments | src/components/event/event-view.js | api/controllers/comment.controller.js api/controller/event.controller.js |

### Steps to run the project

In terminal/cmd enter `npm i`, this will install all the project dependencies

then enter `npm run dev`, this will run the code
