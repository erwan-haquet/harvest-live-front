const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Ce champs est requis';
  }
  return errors;
};

export default validate;
