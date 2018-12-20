import React from 'react';
import './Resources.scss';

class Resources extends React.Component {
  render() {
    const { resource } = this.props;
    return (
      <li className="resource-item row">
        <span className="col-4">{resource.name}</span>
        <a href={resource.url} className="col-5">{resource.url}</a>
    </li>
    );
  }
}

export default Resources;
