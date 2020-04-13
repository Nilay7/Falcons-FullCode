import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../header";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Footer from "../footer";
import axios from 'axios';

class Invitation extends React.Component {

    state = {
        email: '',
        event_id: ''
    };

    constructor(props) {
        super(props);
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    componentDidMount() {
        this.setState({event_id: this.props.location.query.event_id})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const invite = {
            event_id: this.state.event_id,
            "users": [
                {
                    email: this.state.email
                }
            ]
        };

        axios.post('http://localhost:3000/api/invitation/invite/', invite)
            .then(res => alert(res.data));

        this.setState({
            email: ''
        });

    };

    render() {
        return (
            <>
                <Header/>
                <br/><br/><br/><br/><br/>
                <div className="container">
                    <h3>Don't forget to Invite your friends and family to this event!</h3>
                    <br/><br/>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column="column" sm={{span: 2, offset: 2}}>
                                User Email
                            </Form.Label>
                            <Col sm={{span: 6, offset: 0}}>
                                <Form.Control type="text" placeholder="User Email" value={this.state.email}
                                              onChange={this.onChangeEmail.bind(this)}/>
                            </Col>
                        </Form.Group>
                        <br/>
                        <Form.Group as={Row}>
                            <Col sm={{
                                span: 6,
                                offset: 4
                            }}>
                                <Button type="submit">Invite</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Invitation;