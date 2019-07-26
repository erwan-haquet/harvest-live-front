import { createReducer } from 'redux-act';
import { setLocationAction, setPositionAction } from '../actions/location';
import InitialState from '../models/initialState';
import Location from '../models/location';

export const REDUCER_KEY = 'location';

const reducer = createReducer(
  {
    [setLocationAction]: (state, payload) => state.set('data', payload),
    [setPositionAction]: (state, payload) =>
      state.setIn(['data', 'position'], payload),
  },
  new InitialState({
    data: new Location(),
  }),
);

export default {
  [REDUCER_KEY]: reducer,
};
