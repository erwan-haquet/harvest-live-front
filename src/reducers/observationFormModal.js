import { createReducer } from 'redux-act';

import {
  openObservationFormModal,
  closeObservationFormModal,
  nextStepObservationFormModal,
  previousStepObservationFormModal,
  setCultureObservationFormModal,
  setTypeObservationFormModal,
} from '../actions/observationFormModal';
import InitialState from '../models/initialState';
import ObservationFormModal from '../models/observationFormModal';

const reducer = createReducer(
  {
    [openObservationFormModal]: state => state.setIn(['data', 'isOpen'], true),
    [closeObservationFormModal]: state =>
      state.setIn(['data', 'isOpen'], false),
    [nextStepObservationFormModal]: state =>
      state.setIn(['data', 'currentStep'], state.data.currentStep + 1),
    [previousStepObservationFormModal]: state =>
      state.setIn(['data', 'currentStep'], state.data.currentStep - 1),
    [setCultureObservationFormModal]: (state, payload) =>
      state.setIn(['data', 'culture'], payload),
    [setTypeObservationFormModal]: (state, payload) =>
      state.setIn(['data', 'type'], payload),
  },
  new InitialState({
    data: new ObservationFormModal(),
  }),
);

export default reducer;
