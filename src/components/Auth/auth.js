import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../helpers/data/authRequests';
import './Auth.scss';

class Auth extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.func,
  }


  authenticateUser = (e) => {
    e.preventDefault(); // telling it to do only specific thing not the default of click event
    authRequests.authenticate().then((result) => {
      const user = result.additionalUserInfo.username;
      this.props.isAuthenticated(user);
    }).catch(err => console.error('there was an error with auth', err));
  }

  render() {
    return (
        <div className="Auth">
            <button className="btn" onClick={this.authenticateUser}><img src="https://help.dropsource.com/wp-content/uploads/sites/4/2017/02/gh-login-button.png" alt="login button"/></button>
        </div>
    );
  }
}

// const getUserName = () => userName;

export default Auth;
// export { getUserName };
