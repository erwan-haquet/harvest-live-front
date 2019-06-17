import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ProductForm = ({ handleSubmit, previousStep }) => {
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
            <button type="submit" className="next">
                Next
            </button>
        </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(ProductForm);
