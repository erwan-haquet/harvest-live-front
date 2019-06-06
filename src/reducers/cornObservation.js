import { createReducer } from 'redux-act';
import { List } from 'immutable';
import {
  fetchCornObservationsRequestAction,
  fetchCornObservationsSuccessAction,
  fetchCornObservationsFailureAction,
} from '../actions/cornObservation';
import InitialState from '../models/initialState';

const reducer = createReducer(
  {
    [fetchCornObservationsRequestAction]: state =>
      state.set('isFetching', true),
    [fetchCornObservationsFailureAction]: state =>
      state.set('isFetching', false),
    [fetchCornObservationsSuccessAction]: (state, payload) =>
      state.set('isFetching', false).set('data', payload),
  },
  new InitialState({
    data: new List(),
  }),
);

export default reducer;
