import React from 'react';
import './Profile.scss';

class Profile extends React.Component {
  render() {
    const { profile, commits } = this.props;
    console.log(profile);
    return (
      <div className="profile col">
        <h2>Profile</h2>
        <div className="card">
          <img className="img-fluid" src={profile.avatar_url} alt="github pic"></img>
          <h2 className="card-title">{profile.login}</h2>
          <p className="card-text">{profile.bio}</p>
          <a href={profile.html_url} className="_blank">https://github.com/ripalpate</a>
          <h1>{commits}</h1>
        </div>
      </div>
    );
  }
}

export default Profile;
