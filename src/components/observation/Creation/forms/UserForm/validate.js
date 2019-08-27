import { isValidNumber } from '../../../../../utils/phoneUtil';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Ce champ est requis';
  }
  if (values.phone && !isValidNumber(values.phone)) {
    errors.phone = 'Numéro de téléphone invalide';
  }
  return errors;
};

export default validate;
