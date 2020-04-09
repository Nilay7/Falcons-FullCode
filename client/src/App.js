import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login';
import Register from './components/register/register';
import RSVP from "./components/rsvp/Rsvp";
import EventInvitation from './components/event-invitation/event-invitation';
import EditProfile from './components/edit-profile/EditProfile';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
