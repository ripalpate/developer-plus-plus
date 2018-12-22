import React from 'react';
import './Form.scss';

class Form extends React.Component {
  render() {
    return (
      <div className="Form col">
        <h2>Form</h2>
        <form className="row">
        <div className= "col-6">
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="name" placeholder="Learn Html"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="link" className="col-sm-2 col-form-label">Link</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="link" placeholder="www.w3school.org"/>
            </div>
          </div>
          </div>
          <div className="col-4">
          <div className="form-check">
            <label className="form-check-label">
            <input className="form-check-input" type="checkbox"/> Tutorial
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
            <input className="form-check-input" type="checkbox"/> Resources
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
            <input className="form-check-input" type="checkbox"/> Podcasts
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
            <input className="form-check-input" type="checkbox"/> Blogs
            </label>
          </div>
          </div>
          <button type="submit" className="btn btn-primary col-1">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
