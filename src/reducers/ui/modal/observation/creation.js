import { createReducer } from 'redux-act';

import {
  openModalAction,
  closeModalAction,
  nextStepAction,
  previousStepAction,
  setCultureAction,
  setTypeAction,
  setStepAction,
} from '../../../../actions/ui/modal/observation/creation';
import InitialState from '../../../../models/initialState';
import ObservationCreationModal from '../../../../models/ui/modal/observation/creation';

export const REDUCER_KEY = 'ui/modal/observation/creation';

const reducer = createReducer(
  {
    [openModalAction]: state => state.setIn(['data', 'isOpen'], true),
    [closeModalAction]: state => state.setIn(['data', 'isOpen'], false),
    [nextStepAction]: state =>
      state.setIn(['data', 'currentStep'], state.data.currentStep + 1),
    [previousStepAction]: state =>
      state.setIn(['data', 'currentStep'], state.data.currentStep - 1),
    [setCultureAction]: (state, payload) =>
      state.setIn(['data', 'culture'], payload),
    [setTypeAction]: (state, payload) => state.setIn(['data', 'type'], payload),
    [setStepAction]: (state, payload) =>
      state.setIn(['data', 'currentStep'], payload),
  },
  new InitialState({
    data: new ObservationCreationModal(),
  }),
);

export default {
  [REDUCER_KEY]: reducer,
};
