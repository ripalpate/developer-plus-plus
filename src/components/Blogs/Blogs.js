import React from 'react';

import './Blogs.scss';

class Blogs extends React.Component {
  render() {
    const { blog } = this.props;
    return (
      <li className="resource-item row">
        <span className="col-4">{blog.name}</span>
        <a href={blog.url} className="col-4">{blog.url}</a>
      </li>
    );
  }
}

export default Blogs;
