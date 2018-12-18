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
import tutorialRequest from '../helpers/data/tutorialRequest';

class App extends Component {
    // eslint-disable-next-line no-undef
    state = {
      authed: false,
      githubUsername: '',
      profile: [],
      tutorials: [],
    };

    componentDidUpdate() {
      // console.log(this.state.githubUsername);
      if (this.state.githubUsername && this.state.profile.length === 0) {
        profileRequest.getRequest(this.state.githubUsername)
          .then((profile) => {
            this.setState({ profile });
            // console.log(this.state.profile);
          })
          .catch(err => console.error(err));
      }
    }

    componentDidMount() {
      connection();
      // console.log(this.state.githubUsername);
      tutorialRequest.getTurtorialData()
        .then((tutorials) => {
          this.setState({ tutorials });
          // console.log(this.state.tutorials);
        })
        .catch(error => console.error(error));

      this.removeListener = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const users = sessionStorage.getItem('githubUsername');
          this.setState({
            authed: true,
            githubUsername: users,
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
      authRequests.logoutUser();
    }

isAuthenticated = (username) => {
  // console.log(username);
  this.setState({ authed: true, githubUsername: username });
  sessionStorage.setItem('githubUsername', username);
}

deleteOne = (tutorialId) => {
  tutorialRequest.deleteTutorial(tutorialId)
    .then(() => {
      tutorialRequest.getTurtorialData()
        .then((tutorials) => {
          this.setState({ tutorials });
        });
    })
    .catch(err => console.error(err));
}

render() {
  const logoutClickEvent = () => {
    authRequests.logoutUser();
    this.setState({ authed: false, githubUsername: '' });
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
  // console.log(this);
  return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
        <div className="row">
        <div className="col-3 align-self-start">
          <Profile profile={this.state.profile}/>
        </div>
        <div className="col-9 align-self-start">
          <Form><h2>Form</h2></Form>
          <ResourceTracker
          tutorials = {this.state.tutorials}
          deleteSingleTutorial = {this.deleteOne}
          />
        </div>
        </div>
      </div>
  );
}
}

export default App;
