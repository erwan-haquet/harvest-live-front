import { createReducer } from 'redux-act';
import {
  setSelectedObservation,
} from '../actions/selectedObservation';
import InitialState from '../models/initialState';

const reducer = createReducer(
  {
    [setSelectedObservation]: (state, payload) =>
      state.set('data', payload),
  },
  new InitialState({
    data: null,
  }),
);

export default reducer;
