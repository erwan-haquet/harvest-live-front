import { createReducer } from 'redux-act';

import {
  openObservationFormModalAction,
  closeObservationFormModalAction,
  nextStepObservationFormModalAction,
  previousStepObservationFormModalAction,
  setCultureObservationFormModalAction,
  setTypeObservationFormModalAction,
  setStepObservationFormModalAction,
} from '../actions/observationFormModal';
import InitialState from '../models/initialState';
import ObservationFormModal from '../models/observationFormModal';

const reducer = createReducer(
  {
    [openObservationFormModalAction]: state =>
      state.setIn(['data', 'isOpen'], true),
    [closeObservationFormModalAction]: state =>
      state.setIn(['data', 'isOpen'], false),
    [nextStepObservationFormModalAction]: state =>
      state.setIn(['data', 'currentStep'], state.data.currentStep + 1),
    [previousStepObservationFormModalAction]: state =>
      state.setIn(['data', 'currentStep'], state.data.currentStep - 1),
    [setCultureObservationFormModalAction]: (state, payload) =>
      state.setIn(['data', 'culture'], payload),
    [setTypeObservationFormModalAction]: (state, payload) =>
      state.setIn(['data', 'type'], payload),
    [setStepObservationFormModalAction]: (state, payload) =>
      state.setIn(['data', 'currentStep'], payload),
  },
  new InitialState({
    data: new ObservationFormModal(),
  }),
);

export default reducer;
