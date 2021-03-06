const validate = values => {
  const errors = {};
  if (!values.specificWeight) {
    errors.specificWeight = 'Ce champs est requis';
  }
  if (!values.place) {
    errors.place = 'Ce champs est requis';
  }
  if (!values.cultivationMethod) {
    errors.cultivationMethod = 'Ce champs est requis';
  }
  if (!values.protein) {
    errors.protein = 'Ce champs est requis';
  }
  if (values.protein <= 0) {
    errors.protein = 'Ce champs doit être un nombre supérieur à 0';
  }
  if (!values.humidity) {
    errors.humidity = 'Ce champs est requis';
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
