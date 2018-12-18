import React from 'react';
import PropTypes from 'prop-types';

import './Tutorials.scss';
// import authRequests from '../../helpers/data/authRequests';

class Tutorials extends React.Component {
  render() {
    const { tutorial } = this.props;

    return (
    <li className="tutorial-item">
      <span className="">{tutorial.name}</span>
      <span className="">{tutorial.url}</span>
    </li>
    );
  }
}

export default Tutorials;
