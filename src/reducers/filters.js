import { createReducer } from 'redux-act';

import { setSelectedCulture } from '../actions/filters';
import InitialState from '../models/initialState';
import Filters from '../models/filters';

export const REDUCER_KEY = 'filters';

const reducer = createReducer(
  {
    [setSelectedCulture]: (state, payload) =>
      state.setIn(['data', 'selectedCulture'], payload),
  },
  new InitialState({
    data: new Filters(),
  }),
);

export default {
    [REDUCER_KEY]: reducer,
};
