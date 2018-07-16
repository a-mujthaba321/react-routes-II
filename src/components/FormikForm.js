import React from 'react';
import { render } from 'react-dom';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';

const App = ({ values }) => (
  <div>
    <Form>
      <div className="form-group">
          <Field className="form-control" type="email" placeholder="email" name="email" />
          <Field className="form-control" type="password" placeholder="Password" name="password" />
          <label for="newsletter">
              <Field className="form-control" type="checkbox" placeholder="checkbox" name="newsletter" checked={values.newsletter}/>
              News Letter
          </label>
          <Field className="form-control" component="select" placeholder="select an option" name="plan">
            <option value="free">Free</option>
            <option value="premium">Premium</option>
          
          </Field>

          <button className="btn btn-primary" type="submit">Submit</button>
      </div>
    </Form>
  </div>
);

const FormiKApp = withFormik({
  mapPropsToValues(props) {
    return {
      email: '',
      newsletter: true,
      plan: ''
    };
  },
  // validationSchema: Yup.object().shape({
  //   email: Yup.string().email().required(),
  //   password: Yup.string().min(8).required()

  // }),
  handleSubmit(values) {

    console.log('values', values);
  }
  
})(App);

export default FormiKApp;
