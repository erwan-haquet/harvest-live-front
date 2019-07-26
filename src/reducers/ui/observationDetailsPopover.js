import { createReducer } from 'redux-act';

import {
  openObservationDetailsPopoverAction,
  closeObservationDetailsPopoverAction,
} from '../../actions/ui/observationDetailsPopover';
import InitialState from '../../models/initialState';
import ObservationDetailsPopover from '../../models/ui/observationDetailsPopover';

export const REDUCER_KEY = 'observation-details';

const reducer = createReducer(
  {
    [openObservationDetailsPopoverAction]: state =>
      state.setIn(['data', 'isOpen'], true),
    [closeObservationDetailsPopoverAction]: state =>
      state.setIn(['data', 'isOpen'], false),
  },
  new InitialState({
    data: new ObservationDetailsPopover(),
  }),
);

export default {
  [REDUCER_KEY]: reducer,
};
