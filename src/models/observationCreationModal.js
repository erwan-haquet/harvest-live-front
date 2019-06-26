import { Record } from 'immutable';

export const ObservationCreationModal = Record({
  isOpen: false,
  currentStep: 1,
  type: null,
  culture: null,
});

export default ObservationCreationModal;
