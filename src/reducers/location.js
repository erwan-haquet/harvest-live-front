import { createReducer } from 'redux-act';
import { setLocationAction } from '../actions/location';
import InitialState from '../models/initialState';
import Location from '../models/location';

const reducer = createReducer(
  {
    [setLocationAction]: (state, payload) => state.set('data', payload),
  },
  new InitialState({
    data: new Location(),
  }),
);

export default reducer;
