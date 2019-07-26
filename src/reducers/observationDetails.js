import { createReducer } from 'redux-act';

import {
  openObservationDetailsAction,
  closeObservationDetailsAction,
} from '../actions/observationDetails';
import InitialState from '../models/initialState';
import ObservationDetails from '../models/observationDetails';

export const REDUCER_KEY = 'observation-details';

const reducer = createReducer(
  {
    [openObservationDetailsAction]: state => state.setIn(['data', 'isOpen'], true),
    [closeObservationDetailsAction]: state => state.setIn(['data', 'isOpen'], false),
  },
  new InitialState({
    data: new ObservationDetails(),
  }),
);

export default {
    [REDUCER_KEY]: reducer,
};
