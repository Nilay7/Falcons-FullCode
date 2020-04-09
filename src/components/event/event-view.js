import React from 'react';
import './event.css';
import Header from '../header';
import Footer from '../footer';
import {Card, Col, Container, Row} from "react-bootstrap";

const Event = () => {
    return (
        <>
            <Header/>
            <div className='bodyContainer'>
                <Container>
                    <Row className="RowTopMargin">
                        <Col lg={8} md={12}>
                            <Card>
                                <Card.Img src="https://images.unsplash.com/photo-1584521942371-f42b968e98a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
                            </Card>
                        </Col>
                        <Col lg={4} md={12}>
                            <Card>
                                <Card.Body className="CardBodyLeftAlign">
                                    <Card.Title as="h2" style={{fontWeight: "bold"}}>Toronto Rock Concert</Card.Title>
                                    <Card.Text>
                                        <span className="far fa-map fa-2x" />
                                        &nbsp;&nbsp;&nbsp;Toronto, ON
                                        <br/>
                                        <span className="fas fa-users fa-2x" />
                                        <Card.Link href="#">
                                            &nbsp;&nbsp;2,150 Members
                                        </Card.Link>
                                        <br/>
                                        &nbsp;&nbsp;
                                        <span className="far fa-user fa-2x" />
                                        &nbsp;&nbsp;&nbsp;Organized by&nbsp;
                                        <Card.Link href="#">
                                            Drew
                                        </Card.Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="RowTopMargin">
                        <Col lg={8} md={12}>
                            <Card>
                                <Card.Title as="h4">
                                    Details
                                </Card.Title>
                                <Card.Body className="CardBodyLeftAlign">
                                    Join us for this upscale singles mixer at Duke of Somerset.
                                    <br/><br/>
                                    Enjoy music, mixing and mingling over cocktails, appetizers, and an evening of flirtatious fun at this afterwork mixer at Duke of Somerset! There’s no better way to spend an evening than meeting other likeminded singles and making new connections!
                                    <br/><br/>
                                    Dress Code: Dress to impress
                                    <br/><br/>
                                    Ticket Price: $20
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={12}>
                            <Card>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </>
    )
};

export default Event;