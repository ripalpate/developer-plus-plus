import React from 'react';
import PropTypes from 'prop-types';

import './Tutorials.scss';
import authRequests from '../../helpers/data/authRequests';

class Tutorials extends React.Component {
  static propTypes = {
    deleteSingleTutorial: PropTypes.func,
  }

deleteEvent = (e) => {
  e.preventDefault();
  const { deleteSingleTutorial, tutorial } = this.props;
  deleteSingleTutorial(tutorial.id);
}

render() {
  const { tutorial } = this.props;
  const uid = authRequests.getCurrentUid();
  const makeButtons = () => {
    if (tutorial.uid === uid) {
      return (
          <div>
          <span className="col">
            <button className="btn btn-default" onClick={this.deleteEvent}>
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
