import { createReducer } from 'redux-act';
import { List } from 'immutable';
import InitialState from '../models/initialState';
import {
  fetchWheatObservationsFailureAction,
  fetchWheatObservationsRequestAction,
  fetchWheatObservationsSuccessAction,
} from '../actions/wheatObservation';

const reducer = createReducer(
  {
    [fetchWheatObservationsRequestAction]: state =>
      state.set('isFetching', true),
    [fetchWheatObservationsFailureAction]: state =>
      state.set('isFetching', false),
    [fetchWheatObservationsSuccessAction]: (state, payload) =>
      state.set('isFetching', false).set('data', payload),
  },
  new InitialState({
    data: new List(),
  }),
);

export default reducer;
