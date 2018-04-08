import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { createPost } from '../actions';


import { Link } from 'react-router-dom';

import _ from 'lodash';

const FIELDS = {

  title: {
    type: 'input',
    label: 'Title'
  },
  categories: {
    type: 'input',
    label: 'Categories'
  },
  content: {
    type: 'textarea',
    label: 'Content'
  }

};


class NewPost extends Component {

  onSubmit(values) {

    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
          <div className={className}>
              <label>{field.label}</label>
              <input className="form-control" type="text" {...field.input} />
              <div className="text-help">
                  {touched ? error : ''}
              </div>
          </div>
    );
  }


  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="Title"
              name="title"
              component={this.renderField}
            />
            <Field
              label="Categories"
              name="categories"
              component={this.renderField}
            />
            <Field
              label="Post Content"
              name="content"
              component={this.renderField}
            />
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Enter a ${field}`;
    }

  });


  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm',
  fields: _.keys(FIELDS),
})(connect(null, { createPost })(NewPost));
