import { createReducer } from 'redux-act';

import {
  openObservationDetailsModalAction,
  closeObservationDetailsModalAction,
} from '../../actions/ui/observationDetailsModal';
import InitialState from '../../models/initialState';
import ObservationDetailsModal from '../../models/ui/observationDetailsModal';

export const REDUCER_KEY = 'observation-details';

const reducer = createReducer(
  {
    [openObservationDetailsModalAction]: state =>
      state.setIn(['data', 'isOpen'], true),
    [closeObservationDetailsModalAction]: state =>
      state.setIn(['data', 'isOpen'], false),
  },
  new InitialState({
    data: new ObservationDetailsModal(),
  }),
);

export default {
  [REDUCER_KEY]: reducer,
};
