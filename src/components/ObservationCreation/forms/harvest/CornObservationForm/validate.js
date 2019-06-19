const validate = values => {
  const errors = {};
  if (!values.place) {
    errors.place = 'Ce champs est requis';
  }
  if (!values.cultivationMethod) {
    errors.cultivationMethod = 'Ce champs est requis';
  }
  if (!values.humidity) {
    errors.humidity = 'Ce champs est requis';
  }
  if (!values.nitrogenProductUsed) {
    errors.nitrogenProductUsed = 'Ce champs est requis';
  }
  if (!values.nitrogenQuantityUsed) {
    errors.nitrogenQuantityUsed = 'Ce champs est requis';
  }
  if (!values.yield) {
    errors.yield = 'Ce champs est requis';
  }
  if (!values.yieldNotation || values.yieldNotation < 0) {
    errors.yieldNotation = 'Ce champs est requis';
  }
  return errors;
};

export default validate;
