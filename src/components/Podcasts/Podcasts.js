import React from 'react';
// import PropTypes from 'prop-types';
import './Podcasts.scss';
import trackerShape from '../../helpers/propz/trackerShape';
import authRequests from '../../helpers/data/authRequests';

class Podcasts extends React.Component {
  static propTypes = {
    podcast: trackerShape,
  }

  render() {
    const { podcast } = this.props;
    const uid = authRequests.getCurrentUid();
    const makeButtons = () => {
      if (podcast.uid === uid) {
        return (
          <div className="col-2 button-podcast">
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
      <li className="podcast-item row">
        <span className="col-4">{podcast.name}</span>
        <a href={podcast.url} className="col-4">{podcast.url}</a>
        {makeButtons()}
    </li>
    );
  }
}

export default Podcasts;
