import { createReducer } from 'redux-act';
import { List } from 'immutable';
import InitialState from '../../models/initialState';
import {
  fetchSunflowerObservationsFailureAction,
  fetchSunflowerObservationsRequestAction,
  fetchSunflowerObservationsSuccessAction,
} from '../../actions/observation/sunflower';

export const REDUCER_KEY = 'sunflower-observation';

const reducer = createReducer(
  {
    [fetchSunflowerObservationsRequestAction]: state =>
      state.set('isFetching', true),
    [fetchSunflowerObservationsFailureAction]: state =>
      state.set('isFetching', false),
    [fetchSunflowerObservationsSuccessAction]: (state, payload) =>
      state.set('isFetching', false).set('data', payload),
  },
  new InitialState({
    data: new List(),
  }),
);

export default {
    [REDUCER_KEY]: reducer,
};
