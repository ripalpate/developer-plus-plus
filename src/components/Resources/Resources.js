import React from 'react';
import PropTypes from 'prop-types';
import './Resources.scss';
import authRequests from '../../helpers/data/authRequests';
import trackerShape from '../../helpers/propz/trackerShape';


class Resources extends React.Component {
  static propTypes = {
    resource: trackerShape,
    deleteSingleResource: PropTypes.func,
  }

deleteEvent = (e) => {
  e.preventDefault();
  const { deleteSingleResource, resource } = this.props;
  (deleteSingleResource(resource.id));
}

render() {
  const { resource } = this.props;
  const uid = authRequests.getCurrentUid();
  const makeButtons = () => {
    if (resource.uid === uid) {
      return (
          <div className="col-2 button-res">
            <span className="col">
              <button className="btn btn-default" onClick={this.deleteEvent}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
          </div>
      );
    }
    return <span className="col-2"></span>;
  };
  return (
      <li className="resource-item row">
        <span className="col-4">{resource.name}</span>
        <a href={resource.url} className="col-4">{resource.url}</a>
        {makeButtons()}
        <div className="checkbox-div">
          <input type="checkbox"/>
          <label className="checkbox-label">Done!</label>
        </div>
      </li>
  );
}
}

export default Resources;
