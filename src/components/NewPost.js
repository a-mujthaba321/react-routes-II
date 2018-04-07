import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import _ from 'lodash';


class NewPost extends Component {

  renderField(field) {
    return (
          <div className="form-group">
              <label>{field.label}</label>
              <input className="form-control" type="text" {...field.input} />
              {field.meta.error}
          </div>
    );
  }


  render() {
    return (
      <div>
        <form>
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
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(NewPost);
