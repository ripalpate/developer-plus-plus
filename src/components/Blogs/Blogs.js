import React from 'react';
import PropTypes from 'prop-types';

import './Blogs.scss';
import authRequests from '../../helpers/data/authRequests';
import trackerShape from '../../helpers/propz/trackerShape';

class Blogs extends React.Component {
  static propTypes = {
    blog: trackerShape,
    deleteSingleBlog: PropTypes.func,
    updateSingleBlog: PropTypes.func,
  }

deleteEvent = (e) => {
  e.preventDefault();
  const { deleteSingleBlog, blog } = this.props;
  deleteSingleBlog(blog.id);
}

updateEvent = (e) => {
  e.preventDefault();
  const { updateSingleBlog, blog } = this.props;
  const isCompleted = e.target.checked;
  updateSingleBlog(blog.id, isCompleted);
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
        <div className="checkbox-div">
          <input type="checkbox" checked= {blog.isCompleted} id ={blog.id} onChange={this.updateEvent}/>
          <label className="checkbox-label">Done!</label>
      </div>
      </li>
  );
}
}

export default Blogs;
