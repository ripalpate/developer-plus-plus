import React from 'react';
import PropTypes from 'prop-types';

import './Tutorials.scss';
// import authRequests from '../../helpers/data/authRequests';

class Tutorials extends React.Component {
  render() {
    const { tutorial } = this.props;

    return (
    <li className="listing-item">
      <span className="col-7">{tutorial.name}</span>
      <span className="col-3">{tutorial.url}</span>
    </li>
    );
  }
}

export default Tutorials;
