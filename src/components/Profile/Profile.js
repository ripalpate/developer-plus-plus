// import React from 'react';
// import './Profile.scss';

// class Profile extends React.Component {
//   render() {
//     const { profile } = this.props;
//     console.log(profile);
//     return (
//       <div className="profile col">
//         <h2>Profile</h2>
//         <h6>{profile.name}</h6>
//       </div>
//     );
//   }
// }

// export default Profile;
import React from 'react';
import './Profile.scss';

class Profile extends React.Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="profile col">
          <h2>Profile</h2>
          {/* <img className="img-fluid" src={profile.avatar_url} alt="github pic"></img> */}
          <h2 className="card-title">{profile.name}</h2>
          <p className="card-text">{profile.login}</p>
      </div>
    );
  }
}

export default Profile;
