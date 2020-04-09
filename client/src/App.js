import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login';
import Register from './components/register/register';
import RSVP from "./components/rsvp/Rsvp";
import EventInvitation from './components/event-invitation/event-invitation';
import EditProfile from './components/edit-profile/EditProfile';
import Forgetpassword from './components/login/forgetpassword';
import Resetpassword from './components/login/resetpassword';

import EventList from './components/eventlist/eventlist';
import ContactUs from './components/contactus';
import Aboutus from './components/aboutus';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/rsvp' component={RSVP} />
          <Route path='/invite' component={EventInvitation} />
          <Route path='/edit-profile' component={EditProfile} />
          <Route path='/forgetpassword' component={Forgetpassword} />
          <Route path='/resetpassword' component={Resetpassword} />
          <Route path='/eventlist' component={EventList} />
          <Route path='/contactus' component={ContactUs} />
          <Route path='/aboutus' component={Aboutus} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
