import React from 'react';
import PropTypes from 'prop-types';

import './Blogs.scss';
import authRequests from '../../helpers/data/authRequests';
import trackerShape from '../../helpers/propz/trackerShape';

class Blogs extends React.Component {
  static propTypes = {
    blog: trackerShape,
    deleteSingleBlog: PropTypes.func,
  }

deleteEvent = (e) => {
  e.preventDefault();
  const { deleteSingleBlog, blog } = this.props;
  deleteSingleBlog(blog.id);
}

render() {
  const { blog } = this.props;
  const uid = authRequests.getCurrentUid();
  const makeButtons = () => {
    if (blog.uid === uid) {
      return (
          <div className="col-2 button-blog">
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
      <li className="blog-item row">
        <span className="col-4">{blog.name}</span>
        <a href={blog.url} className="col-4">{blog.url}</a>
        {makeButtons()}
      </li>
  );
}
}

export default Blogs;
