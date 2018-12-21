import React from 'react';
import PropTypes from 'prop-types';
import './ResourceTracker.scss';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import classnames from 'classnames';
import trackerShape from '../../helpers/propz/trackerShape';
import Tutorials from '../Tutorials/Tutorials';
import Resources from '../Resources/Resources';
import Blogs from '../Blogs/Blogs';
import Podcasts from '../Podcasts/Podcasts';

class ResourceTracker extends React.Component {
  static propTypes = {
    tutorials: PropTypes.arrayOf(trackerShape),
    deleteSingleTutorial: PropTypes.func,
    resources: PropTypes.arrayOf(trackerShape),
    deleteSingleResource: PropTypes.func,
    blogs: PropTypes.arrayOf(trackerShape),
    deleteSingleBlog: PropTypes.func,
    podcasts: PropTypes.arrayOf(trackerShape),
  }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { tutorials, deleteSingleTutorial } = this.props;
    const tutorialsItemComponent = tutorials.map(tutorial => (
      <Tutorials
      tutorial = {tutorial}
      key={tutorial.id}
      deleteSingleTutorial = {deleteSingleTutorial}
      />
    ));
    const { resources, deleteSingleResource } = this.props;
    const resourcesItemCompent = resources.map(resource => (
      <Resources
      resource = {resource}
      key={resource.id}
      deleteSingleResource = {deleteSingleResource}
      />
    ));
    const { blogs, deleteSingleBlog } = this.props;
    const blogsItemComponent = blogs.map(blog => (
      <Blogs
      blog = {blog}
      key={blog.id}
      deleteSingleBlog = {deleteSingleBlog}
      />
    ));
    const { podcasts } = this.props;
    const podcastsItemComponent = podcasts.map(podcast => (
      <Podcasts
      podcast = {podcast}
      key={podcast.id}
      />
    ));
    return (
      <div className="Resource col">
        <h2>Resource Tracker</h2>
        <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Tutorials
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Resources
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('3'); }}
            >
              Blogs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('4'); }}
            >
              Podcasts
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ul>{tutorialsItemComponent}</ul>
          </TabPane>
          <TabPane tabId="2">
            <ul>{resourcesItemCompent}</ul>
          </TabPane>
          <TabPane tabId="3">
            <ul>{blogsItemComponent}</ul>
          </TabPane>
          <TabPane tabId="4">
            <ul>{podcastsItemComponent}</ul>
          </TabPane>
        </TabContent>
      </div>
      </div>
    );
  }
}

export default ResourceTracker;
