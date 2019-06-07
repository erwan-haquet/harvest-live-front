import { createReducer } from 'redux-act';
import InitialState from '../models/initialState';
import { setMapStyle } from '../actions/mapStyle';

const reducer = createReducer(
  {
    [setMapStyle]: (state, payload) => state.set('data', payload),
  },
  new InitialState({
    data: 'streets-v11',
  }),
);

export default reducer;
