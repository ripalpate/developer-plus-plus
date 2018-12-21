import React from 'react';

import './Blogs.scss';
import authRequests from '../../helpers/data/authRequests';

class Blogs extends React.Component {
  render() {
    const { blog } = this.props;
    const uid = authRequests.getCurrentUid();
    const makeButtons = () => {
      if (blog.uid === uid) {
        return (
          <div className="col-2 button-blog">
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
      <li className="blog-item row">
        <span className="col-4">{blog.name}</span>
        <a href={blog.url} className="col-4">{blog.url}</a>
        {makeButtons()}
      </li>
    );
  }
}

export default Blogs;
