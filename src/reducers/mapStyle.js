import { createReducer } from 'redux-act';
import InitialState from '../models/initialState';
import { setMapStyle } from '../actions/mapStyle';
import { layers } from '../constants/mapStyle';

const reducer = createReducer(
  {
    [setMapStyle]: (state, payload) => state.set('data', payload),
  },
  new InitialState({
    data: layers.STREET,
  }),
);

export default reducer;
