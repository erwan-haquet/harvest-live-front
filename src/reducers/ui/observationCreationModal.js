import { createReducer } from 'redux-act';

import {
  openObservationCreationModalAction,
  closeObservationCreationModalAction,
  nextStepObservationCreationModalAction,
  previousStepObservationCreationModalAction,
  setCultureObservationCreationModalAction,
  setTypeObservationCreationModalAction,
  setStepObservationCreationModalAction,
} from '../../actions/ui/observationCreationModal';
import InitialState from '../../models/initialState';
import ObservationCreationModal from '../../models/ui/observationCreationModal';

export const REDUCER_KEY = 'observation-creation-modal';

const reducer = createReducer(
  {
    [openObservationCreationModalAction]: state =>
      state.setIn(['data', 'isOpen'], true),
    [closeObservationCreationModalAction]: state =>
      state.setIn(['data', 'isOpen'], false),
    [nextStepObservationCreationModalAction]: state =>
      state.setIn(['data', 'currentStep'], state.data.currentStep + 1),
    [previousStepObservationCreationModalAction]: state =>
      state.setIn(['data', 'currentStep'], state.data.currentStep - 1),
    [setCultureObservationCreationModalAction]: (state, payload) =>
      state.setIn(['data', 'culture'], payload),
    [setTypeObservationCreationModalAction]: (state, payload) =>
      state.setIn(['data', 'type'], payload),
    [setStepObservationCreationModalAction]: (state, payload) =>
      state.setIn(['data', 'currentStep'], payload),
  },
  new InitialState({
    data: new ObservationCreationModal(),
  }),
);

export default {
  [REDUCER_KEY]: reducer,
};
