import { createReducer } from 'redux-act';
import {
  setSelectedObservation,
} from '../actions/selectedObservation';
import InitialState from '../models/initialState';

export const REDUCER_KEY = 'selected-observation';

const reducer = createReducer(
  {
    [setSelectedObservation]: (state, payload) =>
      state.set('data', payload),
  },
  new InitialState({
    data: null,
  }),
);

export default {
    [REDUCER_KEY]: reducer,
};
