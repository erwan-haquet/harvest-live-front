import { put, delay } from 'redux-saga/effects';

import { addToastAction, removeToastAction } from '../actions/toast';
import ObservationToast from '../models/observationToast';

export function* createObservationToastAction({ payload: observation }) {
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

export function* createToastAction({ payload: toast }) {
  yield put(addToastAction(toast));
  yield delay(7000);
  yield put(removeToastAction(toast));
}
