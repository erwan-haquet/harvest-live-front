import { createReducer } from 'redux-act';
import { List } from 'immutable';
import {
  fetchRapeseedObservationsRequestAction,
  fetchRapeseedObservationsSuccessAction,
  fetchRapeseedObservationsFailureAction,
} from '../../actions/observation/rapeseed';
import InitialState from '../../models/initialState';

export const REDUCER_KEY = 'rapeseed-observation';

const reducer = createReducer(
  {
    [fetchRapeseedObservationsRequestAction]: state =>
      state.set('isFetching', true),
    [fetchRapeseedObservationsFailureAction]: state =>
      state.set('isFetching', false),
    [fetchRapeseedObservationsSuccessAction]: (state, payload) =>
      state.set('isFetching', false).set('data', payload),
  },
  new InitialState({
    data: new List(),
  }),
);

export default {
    [REDUCER_KEY]: reducer,
};
