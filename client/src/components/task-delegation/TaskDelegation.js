import React from "react";
import axios from "axios";
import Header from "../header";
import Footer from "../footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class TaskDelegation extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            task:
                {
                    event_id: '5e728f4ded408769d875326e',
                    user_id: '5e3eeec1a839dc1b20bcd825',
                    first_name: 'Harshil',
                    last_name: 'Patel',
                    description: 'Hello World'
                },
            rsvps: [{}]
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/rsvp/rsvpbyevent/5e728f4ded408769d875326e')
            .then(res => this.setState({rsvps: res.data}));
    }

    handleSubmit(e) {
        e.preventDefault();

        // const isValid = this.validate();

        // if (isValid) {

        const task = {
            user_id: this.state.task.user_id,
            first_name: this.state.task.first_name,
            last_name: this.state.task.last_name,
            event_id: this.state.task.event_id,
            task: this.state.task.description
        };

        axios.post('http://localhost:3000/api/delegation/adddelegation', task)
            .then(res => alert(res.data));

        this.setState({
            task: {
                user_id: '',
                first_name: '',
                last_name: '',
                event_id: '',
                task: ''
            }
        });

        // window.location = '/eve';
        // }
    }

    onUserChangeListener(e) {
        this.setState({task: {...this.state.task, user_id: e.target.value}});
    };

    render() {
        return (
            <>
                <Header/>
                <br/>
                <div className="container">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>User</Form.Label>
                            <Form.Control as="select" onChange={this.onUserChangeListener.bind(this)}>
                                {this.state.rsvps.map((rsvp, index) => (
                                    <option
                                        value={rsvp.user_id}>{rsvp.user_id} - {rsvp.first_name}, {rsvp.last_name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Task Description</Form.Label>
                            <Form.Control as="textarea" rows="3" value={this.state.task.description}
                                          onChange={(e) => this.setState({
                                              task: {
                                                  ...this.state.task,
                                                  description: e.target.value
                                              }
                                          })}/>
                        </Form.Group>
                        <Button type="submit">Delegate</Button>
                    </Form>
                </div>
                <Footer/>
            </>
        );
    }
}

export default TaskDelegation;