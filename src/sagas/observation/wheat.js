import {put, call, takeEvery} from 'redux-saga/effects';
import { List } from 'immutable';
import { toWheatObservation } from '../../models/observation/wheat';
import {
  fetchWheatObservationsRequestAction,
  fetchWheatObservationsSuccessAction,
  fetchWheatObservationsFailureAction,
  postWheatObservationRequestAction,
  postWheatObservationSuccessAction,
  postWheatObservationFailureAction,
} from '../../actions/observation/wheat';
import fetch from 'cross-fetch';
import FormError from '../../errors/FormError';
import {
    closeModalAction,
    setStepAction,
} from '../../actions/ui/modal/observation/creation';
import LatLng from '../../models/latLng';
import { setAskedPositionAction } from '../../actions/askedPosition';
import { createToastAction } from '../../actions/ui/toast';
import Toast from '../../models/toast';
import { destroy } from 'redux-form';
import { parseAndFormat } from '../../utils/phoneUtil';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

export function* watchFetchWheatObservationsRequest({ payload: { bounds } }) {
  try {
    const response = yield call(
      fetch,
      `${apiUrl}/wheat-observations?coordinates[within_box]=[${
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
      data.map(observation => toWheatObservation(observation)),
    );

    yield put(fetchWheatObservationsSuccessAction(list));
  } catch (error) {
    yield put(fetchWheatObservationsFailureAction());
  }
}

export function* watchPostWheatObservationRequest({ payload: { form } }) {
  try {
    const body = {
      ...form,
      specificWeight: parseFloat(form.specificWeight),
      protein: parseFloat(form.protein),
      fallingNumber: parseFloat(form.fallingNumber),
      yield: parseFloat(form.yield),
      nitrogenQuantityUsed: parseFloat(form.nitrogenQuantityUsed),
      humidity: parseFloat(form.humidity),
      place: form.place.label,
      phone: form.phone ? parseAndFormat(form.phone) : undefined,
      targetPrice: form.targetPrice ? parseFloat(form.targetPrice) : undefined,
    };

    const response = yield call(
      fetch,
      `${apiUrl}/wheat-observations`,
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

    yield put(postWheatObservationSuccessAction());
    yield put(closeModalAction());
    yield put(setStepAction(1));
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
    yield put(postWheatObservationFailureAction());
  }
}

export const sagas = [
    takeEvery(fetchWheatObservationsRequestAction, watchFetchWheatObservationsRequest),
    takeEvery(postWheatObservationRequestAction, watchPostWheatObservationRequest)
];
