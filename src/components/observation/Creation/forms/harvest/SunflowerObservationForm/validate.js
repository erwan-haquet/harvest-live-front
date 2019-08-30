const validate = values => {
  const errors = {};
  if (!values.specificWeight) {
    errors.specificWeight = 'Ce champs est requis';
  }
  if(values.specificWeight <= 0){;
    errors.specificWeight = 'Ce champs doit être un nombre supérieur à 0'
  }
  if (!values.place) {
    errors.place = 'Ce champs est requis';
  }
  if (!values.cultivationMethod) {
    errors.cultivationMethod = 'Ce champs est requis';
  }
  if (!values.humidity) {
    errors.humidity = 'Ce champs est requis';
  }
  if(values.humidity <= 0){;
    errors.humidity = 'Ce champs doit être un nombre supérieur à 0'
  }
  if (!values.yield) {
    errors.yield = 'Ce champs est requis';
  }
  if(values.yield <= 0){;
    errors.yield = 'Ce champs doit être un nombre supérieur à 0'
  }
  if (!values.yieldNotation || values.yieldNotation < 0) {
    errors.yieldNotation = 'Ce champs est requis';
  }

  return errors;
};

export default validate;
