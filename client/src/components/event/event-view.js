import React, {useState, useEffect} from 'react';
import './event.css';
import Header from '../header';
import Footer from '../footer';
import MapContainer from "./MapContainer";
import {Card, Col, Container, Row, Form} from "react-bootstrap";


const NewComment = () => {
    return(
        <div className="AddTopMargin">
            <Row>
                <Col sm={11}>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control size="lg" as="textarea" className="defaultTextBox" rows="1" placeholder="Add a comment..."/>
                        </Form.Group>
                    </Form>
                </Col>
                <Col sm={1}>
                    <div style={{
                        cursor:"text",
                        paddingTop: "20px",
                        paddingBottom: "20px"}}>
                        <span className="fas fa-paper-plane fa-2x" />
                    </div>
                </Col>
            </Row>
        </div>
    )
};

const Comment = () => {
    return(
        <Card>
            <Card.Body className="LeftAlign">
                <h5>
                    Rakshit Solanki
                </h5>
                This event will be the best event of 2020.
            </Card.Body>
        </Card>
    )
};

const PhotoViewer = () => {
    return(
        <Card>
            <Card.Img src="https://images.unsplash.com/photo-1584521942371-f42b968e98a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
        </Card>
    )
};

const EventDetails = (props) => {
    return(
        <div>
            <div className="LeftAlign HeadingFont">
                Details
            </div>
            <div className="LeftAlign AddTopMargin NormalFont">
                {props.description}
            </div>
        </div>
    )
};

const EventRightSideBar = (props) => {
    return(
        <Card className="sticky-top">
            <Card.Body className="LeftAlign">
                <Card.Title as="h3" style={{fontWeight: "bold"}}>{props.name}</Card.Title>
                <Card.Text>
                    <span className="far fa-map fa-2x" />
                    &nbsp;&nbsp;&nbsp;{props.address}
                    <br/>
                    <span className="fas fa-users fa-2x" />
                    <Card.Link href="#">
                        &nbsp;&nbsp;2,150 Members
                    </Card.Link>
                    <br/>
                    &nbsp;&nbsp;
                    <span className="far fa-user fa-2x" />
                    &nbsp;&nbsp;&nbsp;Organized by&nbsp;
                    {props.admin}
                    <br/>
                    &nbsp;&nbsp;<span className="fas fa-calendar-alt fa-2x" />
                    &nbsp;&nbsp;&nbsp;{props.start_date.toString()}
                    <br/>
                    &nbsp;&nbsp;<span className="fas fa-calendar-check fa-2x" />
                    &nbsp;&nbsp;&nbsp;{props.end_date.toString()}
                    <br/>
                </Card.Text>
            </Card.Body>
            <MapContainer lat={props.address_latitude} lng={props.address_logitide}/>
        </Card>
    )
};

export default function Event(props) {
    const [admin, setAdmin] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [start_date, setStartDate] = useState(new Date());
    const [end_date, setEndDate] = useState(new Date());
    const [address, setAddress] = useState("");
    const [address_latitude, setAddressLatitude] = useState("");
    const [address_logitide, setAddressLongitutde] = useState("");
    const [event_picture, setEventPicture] = useState("");
    const { event_id } = props.match.params;

    useEffect(() => {
        fetch('/api/event/' + event_id, {
            method: 'GET'
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(resp => {
                        setAdmin(resp.user_id.firstname + resp.user_id.lastname);
                        setName(resp.name);
                        setDescription(resp.description);
                        setType(resp.type);
                        setAddress(resp.address);
                        setAddressLatitude(resp.address_latitude['$numberDecimal']);
                        setAddressLongitutde(resp.address_longitude['$numberDecimal']);
                        setStartDate(resp.start_date);
                        setEndDate(resp.start_date);
                    })
                } else {
                    res.json().then(resp => {
                        alert(JSON.stringify(resp.msg));
                    })
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
    }, []);

    return (
        <>
            <Header/>
            <div className='bodyContainer'>
                <Container>
                    <Row className="AddTopMargin">
                        <Col lg={8} md={12}>
                            <Row>
                                <Col>
                                    <PhotoViewer/>
                                </Col>
                            </Row>
                            <Row className="AddTopMargin">
                                <Col>
                                    <EventDetails description={description}/>
                                </Col>
                            </Row>
                            <Row className="AddTopMargin">
                                <Col>
                                    <Row className="AddTopMargin">
                                        <Col>
                                            <h3 className="LeftAlign HeadingFont">
                                                Comments
                                            </h3>
                                            <NewComment/>
                                        </Col>
                                    </Row>
                                    <Row className="AddTopMargin">
                                        <Col>
                                            <Comment/>
                                        </Col>
                                    </Row>
                                    <Row className="AddTopMargin">
                                        <Col>
                                            <Comment/>
                                        </Col>
                                    </Row>
                                    <Row className="AddTopMargin">
                                        <Col>
                                            <Comment/>
                                        </Col>
                                    </Row>
                                    <Row className="AddTopMargin AddBottomMargin">
                                        <Col>
                                            <Comment/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4} md={12}>
                            <EventRightSideBar
                                admin={admin}
                                name={name}
                                type={type}
                                address={address}
                                address_latitude={address_latitude}
                                address_logitide={address_logitide}
                                start_date={start_date}
                                end_date={end_date}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </>
    )
};