import {put, delay, takeEvery} from 'redux-saga/effects';

import {
  createObservationToastAction,
  createToastAction,
  addToastAction,
  removeToastAction
} from '../actions/toast';
import ObservationToast from '../models/observationToast';

export function* watchCreateObservationToast({ payload: observation }) {
  const toast = new ObservationToast({
    coordinates: observation.coordinates,
    message: `Nouvelle observation de ${observation.cultureName} à ${
      observation.place
    }`,
  });
  yield put(addToastAction(toast));
  yield delay(7000);
  yield put(removeToastAction(toast));
}

export function* watchCreateToast({ payload: toast }) {
  yield put(addToastAction(toast));
  yield delay(7000);
  yield put(removeToastAction(toast));
}

export const sagas = [
  takeEvery(createObservationToastAction, watchCreateObservationToast),
  takeEvery(createToastAction, watchCreateToast)
];
