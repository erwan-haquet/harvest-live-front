import { isValidNumber } from '../../../../../utils/phoneUtil';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Ce champs est requis';
  }
  if (values.phone && !isValidNumber(values.phone)) {
    errors.phone = 'Numéro de téléphone invalide';
  }
  return errors;
};

export default validate;
