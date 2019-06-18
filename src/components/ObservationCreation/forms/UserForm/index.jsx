import React from 'react';
import { Field, reduxForm } from 'redux-form';

const UserForm = ({ handleSubmit, previousStep, pristine, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component="input"
        label="First Name"
      />
      <Field name="lastName" type="text" component="input" label="Last Name" />
      <div>
        <button type="button" className="previous" onClick={previousStep}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(UserForm);
