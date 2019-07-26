import {put, call, takeEvery} from 'redux-saga/effects';
import { List } from 'immutable';
import { toBarleyObservation } from '../models/barleyObservation';
import {
    fetchBarleyObservationsRequestAction,
  fetchBarleyObservationsSuccessAction,
  fetchBarleyObservationsFailureAction,
  postBarleyObservationRequestAction,
  postBarleyObservationSuccessAction,
  postBarleyObservationFailureAction,
} from '../actions/barleyObservation';
import fetch from 'cross-fetch';
import FormError from '../errors/FormError';
import {
  closeObservationCreationModalAction,
  setStepObservationCreationModalAction,
} from '../actions/ui/observationCreationModal';
import { setAskedPositionAction } from '../actions/askedPosition';
import LatLng from '../models/latLng';
import { createToastAction } from '../actions/ui/toast';
import Toast from '../models/toast';
import { destroy } from 'redux-form';
import { parseAndFormat } from '../utils/phoneUtil';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

export function* watchFetchBarleyObservationsRequest({ payload: { bounds } }) {
  try {
    const response = yield call(
      fetch,
      `${apiUrl}/barley-observations?coordinates[within_box]=[${
        bounds.southWest.latitude
      },${bounds.southWest.longitude},${bounds.northEast.latitude},${
        bounds.northEast.longitude
      }`,
      {
        headers: {
          accept: 'application/json',
        },
      },
    );
    const data = yield call([response, response.json]);
    const list = new List(
      data.map(observation => toBarleyObservation(observation)),
    );

    yield put(fetchBarleyObservationsSuccessAction(list));
  } catch (error) {
    yield put(fetchBarleyObservationsFailureAction());
  }
}

export function* watchPostBarleyObservationRequest({ payload: { form } }) {
  try {
    const body = {
      ...form,
      specificWeight: parseFloat(form.specificWeight),
      yield: parseFloat(form.yield),
      nitrogenQuantityUsed: parseFloat(form.nitrogenQuantityUsed),
      humidity: parseFloat(form.humidity),
      phone: form.phone ? parseAndFormat(form.phone) : undefined,
      place: form.place.label,
      targetPrice: form.targetPrice ? parseFloat(form.targetPrice) : undefined,
    };

    const response = yield call(
      fetch,
      `${apiUrl}/barley-observations`,
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    );

    const responseBody = yield call([response, response.json]);

    if (response.status !== 201) {
      if (response.status === 400) {
        throw new FormError(responseBody);
      }
      throw new Error(responseBody);
    }

    yield put(postBarleyObservationSuccessAction());
    yield put(closeObservationCreationModalAction());
    yield put(setStepObservationCreationModalAction(1));
    yield put(destroy('observation'));

    yield put(
      setAskedPositionAction(
        new LatLng({
          latitude: responseBody.coordinates.latitude,
          longitude: responseBody.coordinates.longitude,
        }),
      ),
    );

    yield put(
      createToastAction(
        new Toast({
          title: 'Nouvelle observation',
          body: 'Votre observation a été ajoutée avec succés! ',
          variant: 'success',
        }),
      ),
    );
  } catch (error) {
    if (error instanceof FormError) {
      yield put(
        createToastAction(
          new Toast({
            title: 'Vérifier vos informations',
            body: error.violations.map(v => v.message).join(' '),
            variant: 'danger',
          }),
        ),
      );
    } else {
      yield put(
        createToastAction(
          new Toast({
            title: 'Oops',
            body: 'Une erreur est survenue, merci de réessayer ultérieurement',
            variant: 'danger',
          }),
        ),
      );
    }
    yield put(postBarleyObservationFailureAction());
  }
}

export const sagas = [
    takeEvery(fetchBarleyObservationsRequestAction, watchFetchBarleyObservationsRequest),
    takeEvery(postBarleyObservationRequestAction, watchPostBarleyObservationRequest)
];
