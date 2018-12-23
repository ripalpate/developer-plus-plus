import React from 'react';
import PropTypes from 'prop-types';

import './Tutorials.scss';
import authRequests from '../../helpers/data/authRequests';
import trackerShape from '../../helpers/propz/trackerShape';

class Tutorials extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  static propTypes = {
    tutorial: trackerShape,
    deleteSingleTutorial: PropTypes.func,
    updateSingleTutorial: PropTypes.func,
  }

deleteEvent = (e) => {
  e.preventDefault();
  const { deleteSingleTutorial, tutorial } = this.props;
  deleteSingleTutorial(tutorial.id);
}

updateEvent = (e) => {
  e.preventDefault();
  const { updateSingleTutorial, tutorial } = this.props;
  // console.log(tutorial);
  // const completedTutorial = [];
  const isCompleted = e.target.checked;
  updateSingleTutorial(tutorial.id, isCompleted);
  // completedTutorial.push(tutorial);
  // console.log(completedTutorial);
}

render() {
  const { tutorial } = this.props;
  const uid = authRequests.getCurrentUid();
  const makeButtons = () => {
    if (tutorial.uid === uid) {
      return (
          <div className="col-2 button">
          <span className="">
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
    <li className="tutorial-item  row">
      <span className="col-3">{tutorial.name}</span>
      <a href={tutorial.url} className="col-4">{tutorial.url}</a>
      {makeButtons()}
      <div className="checkbox-div">
          <input type="checkbox" value={this.state.value} checked={tutorial.isCompleted} id={tutorial.id} onChange={this.updateEvent}/>
          <label className="checkbox-label">Done!</label>
      </div>
    </li>
  );
}
}

export default Tutorials;
