import React from 'react';
// import PropTypes from 'prop-types';

import './Tutorials.scss';
import authRequests from '../../helpers/data/authRequests';

class Tutorials extends React.Component {
  render() {
    const { tutorial } = this.props;
    const uid = authRequests.getCurrentUid();
    console.log(uid);
    const makeButtons = () => {
      if (tutorial.uid === uid) {
        return (
          <div>
          <span className="col">
            <button className="btn btn-default">
              <i className="fas fa-trash-alt"></i>
            </button>
          </span>
        </div>
        );
      }
      return <span className= "col-2"></span>;
    };

    return (
    <li className="tutorial-item">
      <span className="">{tutorial.name}</span>
      <span className="">{tutorial.url}</span>
      {makeButtons()}
    </li>
    );
  }
}

export default Tutorials;
