import { createReducer } from 'redux-act';
import { List } from 'immutable';
import {
  fetchCornObservationsRequestAction,
  fetchCornObservationsSuccessAction,
  fetchCornObservationsFailureAction,
} from '../../actions/observation/corn';
import InitialState from '../../models/initialState';

export const REDUCER_KEY = 'observation/corn';

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

export default {
    [REDUCER_KEY]: reducer,
};
