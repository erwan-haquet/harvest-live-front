import { Record } from 'immutable';

export const ObservationFormModal = Record({
  isOpen: false,
  currentStep: 1,
  type: null,
  culture: null,
});

export default ObservationFormModal;
