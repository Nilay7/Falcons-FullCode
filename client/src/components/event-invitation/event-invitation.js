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
        email: ''
    };

    constructor(props) {
        super(props);
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // const isValid = this.validate();

        // if (isValid) {

        const invite = {
            event_id: "5e728f21cb5eb79ed0d277b5",
            "users": [
                {
                    email: this.state.email
                }
            ]
        };

        // console.log(invite);
        axios.post('http://localhost:3000/api/invitation/invite/', invite)
            .then(res => alert(res.data));

        this.setState({
            email: ''
        });

        // window.location = '/roomHome';
        // }
    };

    render() {
        return (
            <>
                <Header/>
                <br/><br/><br/><br/><br/>
                <div className="container">
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