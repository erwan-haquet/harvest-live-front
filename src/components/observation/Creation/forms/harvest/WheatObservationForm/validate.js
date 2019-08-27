const validate = values => {
  const errors = {};
  if (!values.specificWeight) {
    errors.specificWeight = 'Ce champ est requis';
  }
  if (!values.place) {
    errors.place = 'Ce champ est requis';
  }
  if (!values.cultivationMethod) {
    errors.cultivationMethod = 'Ce champ est requis';
  }
  if (!values.protein) {
    errors.protein = 'Ce champ est requis';
  }
  if (!values.humidity) {
    errors.humidity = 'Ce champ est requis';
  }
  if (!values.yield) {
    errors.yield = 'Ce champ est requis';
  }
  if (!values.yieldNotation || values.yieldNotation < 0) {
    errors.yieldNotation = 'Ce champ est requis';
  }
  return errors;
};

export default validate;
