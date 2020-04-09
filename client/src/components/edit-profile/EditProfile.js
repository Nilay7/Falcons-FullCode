import React from 'react';
import Header from "../header";
import Footer from "../footer";
import axios from 'axios';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '5e72af401ba9485850ffa3aa',
            username: 'HarshilPatel',
            firstname: 'Harshil',
            lastname: 'Patel',
            email: 'patelharshil@gmail.com',
            phonenumber: '1231231234',
            password: 'harshil123',
            confirm_password: 'harshil123'
        }
    }

    updateProfileHandler = () => {
        const user = {
            _id: this.state._id,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phonenumber: this.state.phonenumber,
        };

        console.log(user);

        axios.put('http://localhost:3000/api/user/update/', user)
            .then(response => {
                console.log(response);
            });
    };

    // cancelHandler = () => {
    //     this.setState({
    //         _id: '',
    //         username: '',
    //         email: '',
    //         password: '',
    //         firstname: '',
    //         lastname: '',
    //         phonenumber: ''
    //     });
    // };

    render() {
        return (
            <>
                <Header/>
                <br/>
                <div className="container justify-content-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-lg-offset-4">
                            <h3>Edit Profile</h3>
                            <form className="form-horizontal" role="form">
                                <div className="form-group">
                                    <label className="col-md-3 control-label">Username:</label>

                                        <input className="form-control" type="text" value={this.state.username}
                                               onChange={(event) => this.setState({username: event.target.value})}/>

                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">First name:</label>

                                        <input className="form-control" type="text" value={this.state.firstname}
                                               onChange={(event) => this.setState({firstname: event.target.value})}/>

                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Last name:</label>

                                        <input className="form-control" type="text" value={this.state.lastname}
                                               onChange={(event) => this.setState({lastname: event.target.value})}/>

                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Email:</label>

                                        <input className="form-control" type="email" value={this.state.email}
                                               onChange={(event) => this.setState({email: event.target.value})}/>

                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Phone:</label>

                                        <input className="form-control" type="text" value={this.state.phonenumber}
                                               onChange={(event) => this.setState({phonenumber: event.target.value})}/>

                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">Password:</label>

                                        <input className="form-control" type="password" value={this.state.password}
                                               onChange={(event) => this.setState({password: event.target.value})}/>

                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">Confirm password:</label>

                                        <input className="form-control" type="password"
                                               value={this.state.confirm_password}
                                               onChange={(event) => this.setState({confirm_password: event.target.value})}/>

                                </div>
                                <div className="form-group">

                                        <input type="button" className="btn btn-primary" value="Update"
                                               onClick={this.updateProfileHandler}/>
                                        <input type="reset" className="btn btn-default" value="Cancel"/>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
                <Footer/>
            </>
        );
    }
}

export default EditProfile;
