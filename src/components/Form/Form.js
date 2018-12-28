import React from 'react';
import './Form.scss';
import authRequests from '../../helpers/data/authRequests';


const defaultTrackerForm = {
  name: '',
  url: '',
  uid: '',
  type: '',
};

class Form extends React.Component {
  state = {
    newTrackerForm: defaultTrackerForm,
  }

formFieldStringState = (name, e) => {
  e.preventDefault();
  const tempTracker = { ...this.state.newTrackerForm };
  tempTracker[name] = e.target.value;
  this.setState({ newTrackerForm: tempTracker });
}

nameChange = e => this.formFieldStringState('name', e);

urlchange = e => this.formFieldStringState('url', e);

changeOption = (e) => {
  const tempTracker = { ...this.state.newTrackerForm };
  tempTracker.type = e.target.value;
  this.setState({ newTrackerForm: tempTracker });
}

formSubmit = (e) => {
  e.preventDefault();
  const { onSubmit } = this.props;
  const myTracker = { ...this.state.newTrackerForm };
  myTracker.uid = authRequests.getCurrentUid();
  onSubmit(myTracker);
  this.setState({ newTrackerForm: defaultTrackerForm });
  // const checkboxes = document.getElementsByClassName('form-check-input');
  // for (let i = 0; i <= checkboxes.length; i + 1) {
  //   checkboxes[i].checked = false;
  // }
}

render() {
  const { newTrackerForm } = this.state;

  return (
      <div className="form col">
        <form className="row" id= "add-form" onSubmit={this.formSubmit} >
        <div className= "col-6">
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                value= {newTrackerForm.name}
                placeholder="Learn Html"
                onChange={this.nameChange}
                />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="link" className="col-sm-2 col-form-label">Link</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="link"
                placeholder="www.w3school.org"
                value= {newTrackerForm.url}
                onChange={this.urlchange}
                />
            </div>
          </div>
          </div>
          <div className="col-4">
          <div className="form-check">
            <label className="form-check-label">
            <input
            value="tutorial"
            className="form-check-input"
            type="checkbox"
            onChange={this.changeOption}
            /> Tutorial
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              value="resources"
              onChange={this.changeOption}
              /> Resources
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              value="podcast"
              onChange={this.changeOption}
              /> Podcasts
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
            <input
            className="form-check-input"
            type="checkbox"
            value="blog"
            onChange={this.changeOption}
            /> Blogs
            </label>
          </div>
          </div>
          <div className="col-2">
          <button type="submit" className="btn btn-primary col-1 add-button">+</button>
          </div>
        </form>
      </div>
  );
}
}

export default Form;
