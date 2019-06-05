import { createReducer } from 'redux-act';

import {
  locationFromGeolocationRequestAction,
  locationFromGeolocationFailureAction,
  locationFromGeolocationSuccessAction,
} from '../actions/location';

const reducer = createReducer(
  {
    [locationFromGeolocationRequestAction]: state => ['request'],
    [locationFromGeolocationFailureAction]: state => ['failure'],
    [locationFromGeolocationSuccessAction]: (state, payload) => ['success'],
  },
  [],
);

export default reducer;
