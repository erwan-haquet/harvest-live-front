import { createReducer } from 'redux-act';
import { List } from 'immutable';
import {
  fetchBarleyObservationsRequestAction,
  fetchBarleyObservationsSuccessAction,
  fetchBarleyObservationsFailureAction,
} from '../actions/barleyObservation';
import InitialState from '../models/initialState';

export const REDUCER_KEY = 'barley-observation';

const reducer = createReducer(
  {
    [fetchBarleyObservationsRequestAction]: state =>
      state.set('isFetching', true),
    [fetchBarleyObservationsFailureAction]: state =>
      state.set('isFetching', false),
    [fetchBarleyObservationsSuccessAction]: (state, payload) =>
      state.set('isFetching', false).set('data', payload),
  },
  new InitialState({
    data: new List(),
  }),
);

export default {
    [REDUCER_KEY]: reducer,
};
