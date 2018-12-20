import React from 'react';
import './Resources.scss';
import authRequests from '../../helpers/data/authRequests';

class Resources extends React.Component {
  render() {
    const { resource } = this.props;
    const uid = authRequests.getCurrentUid();
    const makeButtons = () => {
      if (resource.uid === uid) {
        return (
          <div className="col-2 button-res">
            <span className="col">
              <button className="btn btn-default">
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
    </li>
    );
  }
}

export default Resources;
