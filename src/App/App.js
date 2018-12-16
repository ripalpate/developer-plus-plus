import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Profile from '../components/Profile/Profile';
import Form from '../components/Form/Form';
import ResourceTracker from '../components/ResourceTracker/ResourceTracker';
import './App.scss';
import authRequests from '../helpers/data/authRequests';
import profileRequest from '../helpers/data/profileRequest';

class App extends Component {
    // eslint-disable-next-line no-undef
    state = {
      authed: false,
    };

    componentDidMount() {
      connection();
      profileRequest.getRequest()
        .then(() => {

        })
        .catch(err => console.error(err));

      this.removeListener = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            authed: true,
          });
        } else {
          this.setState({
            authed: false,
          });
        }
      });
    }

    componentWillUnmount() {
      this.removeListener();
    }

isAuthenticated = () => {
  this.setState({ authed: true });
}

render() {
  const logoutClickEvent = () => {
    authRequests.logoutUser();
    this.setState({ authed: false });
  };
  if (!this.state.authed) {
    return (
        <div className="App">
          <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
          <Auth isAuthenticated={this.isAuthenticated}/>
        </div>
    );
  }
  // //passing reference not calling it
  console.log(this);
  return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
        <div className="row">
        <div className="col-3 align-self-start">
          <Profile><h2>Profile</h2></Profile>
        </div>
        <div className="col-9 align-self-start">
          <Form><h2>Form</h2></Form>
          <ResourceTracker><h2>Resource Tracker</h2></ResourceTracker>
        </div>
        </div>
      </div>
  );
}
}

export default App;
