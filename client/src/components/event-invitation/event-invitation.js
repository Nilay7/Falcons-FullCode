import Table from 'react-bootstrap/Table';
import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header';
import Footer from '../footer';

const Invitation = () => {
    return (
        <>
            <Header/>
            <h1>All User List</h1>
            <form className="form">
                <Table bordered hover>
                    <thead>
                    <tr>
                        <th>Invite</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><Form.Check/></td>
                        <td>Mark</td>
                        <td>mark@gmail.com</td>
                    </tr>
                    <tr>
                        <td><Form.Check/></td>
                        <td>Jacob</td>
                        <td>jacob@yahoo.com</td>
                    </tr>
                    <tr>
                        <td><Form.Check/></td>
                        <td>Larry the Bird</td>
                        <td>larry@gmail.com</td>
                    </tr>
                    </tbody>
                </Table>
                <Button className="pull-right" onClick={() => {
                    alert('Invitation Sent')
                }}>
                    Send Invite
                </Button>

                {/* {/<Button variant="primary" className="pull-right" type="submit">Invite</Button>/} */}
            </form>
            <Footer/>
        </>
    )
};

export default Invitation;