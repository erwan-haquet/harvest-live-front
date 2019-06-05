import { put } from 'redux-saga/effects';

import {
  locationFromGeolocationSuccessAction as successAction,
  locationFromGeolocationFailureAction as failureAction,
} from '../actions/location';

export function* locationFromGeolocationRequestAction({ payload }) {
  try {
    yield put(successAction(payload));
  } catch (error) {
    yield put(failureAction(error));
  }
}