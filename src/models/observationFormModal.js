import { Record } from 'immutable';

export const ObservationFormModal = Record({
  isOpen: false,
  currentStep: 1,
  selectedCulture: null,
});

export default ObservationFormModal;
