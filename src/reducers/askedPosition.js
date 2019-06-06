import { createReducer } from 'redux-act';
import {
  setAskedPositionRequestAction,
  setAskedPositionSuccessAction,
  setAskedPositionFulfillAction,
} from '../actions/askedPosition';
import InitialState from '../models/initialState';
import LatLng from '../models/latLng';

const reducer = createReducer(
  {
    [setAskedPositionRequestAction]: state => state.set('isFetching', true),
    [setAskedPositionFulfillAction]: state => state.set('isFetching', false),
    [setAskedPositionSuccessAction]: (state, payload) =>
      state.set('data', payload),
  },
  new InitialState({
    data: new LatLng(),
  }),
);

export default reducer;
