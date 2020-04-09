import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import '../rsvp/rsvp.css';
import {Dropdown, DropdownButton} from "react-bootstrap";
import axios from "axios";

const MyVerticallyCenteredModal = (props) => {

    return (
        <Modal onHide={props.onHide} show={props.show} size="lg" aria-labelledby="contained-modal-title-vcenter"
               centered="centered">
            <Modal.Header closeButton="closeButton">
                <Modal.Title id="contained-modal-title-vcenter">
                    RSVP for GDG
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>GDG</h4>
                <p>
                    Monday, March 23, 2020 7:00 PM to 9:00 PM
                </p>

                <p>No of Guests</p>

                <DropdownButton id="dropdown-item-button" onSelect={props.guestsUpdated} title={props.guests}>
                    <Dropdown.Item eventKey="0" as="button">0</Dropdown.Item>
                    <Dropdown.Item eventKey="1" as="button">1</Dropdown.Item>
                    <Dropdown.Item eventKey="2" as="button">2</Dropdown.Item>
                </DropdownButton>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="success" onClick={props.rsvpClicked}>
                    RSVP
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

class RSVP extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            guest: 0,
            rsvp: false
        };
    }

    guestsUpdated = (e) => {
        this.setState({guest: e});
    };

    saveRsvp = () => {
        const rsvp = {
            user_id: "5e3eeec1a839dc1b20bcd825",
            event_id: "5e3c13f99206141034f95430",
            response: true,
            no_of_guests: this.state.guest
        };

        axios.post('http://localhost:3000/api/rsvp/confirm/', rsvp)
            .then(res => console.log(res.data));

        this.setState({
            modalShow: false,
            guest: 0,
            rsvp: false
        })
    };

    render() {
        return (
            <div>
                < div className="container">
                    <div className="vertical-center">
                        <Button variant="primary" onClick={() => this.setState({modalShow: true})}>
                            RSVP
                        </Button>
                    </div>

                    <MyVerticallyCenteredModal show={this.state.modalShow}
                                               onHide={() => this.setState({modalShow: false})}
                                               rsvpClicked={this.saveRsvp} guestsUpdated={this.guestsUpdated}
                                               guests={this.state.guest}/>
                </div>
            </div>
        )
    };
}

export default RSVP;