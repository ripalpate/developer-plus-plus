import React from 'react';
// import PropTypes from 'prop-types';
import './Podcasts.scss';
import trackerShape from '../../helpers/propz/trackerShape';

class Podcasts extends React.Component {
  static propTypes = {
    podcast: trackerShape,
  }

  render() {
    const { podcast } = this.props;
    return (
      <li className="podcast-item row">
        <span className="col-4">{podcast.name}</span>
        <a href={podcast.url} className="col-4">{podcast.url}</a>
    </li>
    );
  }
}

export default Podcasts;
