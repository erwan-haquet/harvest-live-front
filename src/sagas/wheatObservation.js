import { put, call } from 'redux-saga/effects';
import { List } from 'immutable';
import { toWheatObservation } from '../models/wheatObservation';
import {
  fetchWheatObservationsSuccessAction,
  fetchWheatObservationsFailureAction,
  postWheatObservationSuccessAction,
  postWheatObservationFailureAction,
} from '../actions/wheatObservation';
import fetch from 'cross-fetch';

export function* fetchWheatObservationsRequestAction({ payload: { bounds } }) {
  try {
    const response = yield call(
      fetch,
      `https://api.capgrain.com/wheat-observations?coordinates[within_box]=[${
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

export function* postWheatObservationRequestAction({ payload: { form } }) {
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
      coordinates: form.coordinates,
      targetPrice: form.targetPrice ? parseFloat(form.targetPrice) : undefined,
    };

    const response = yield call(
      fetch,
      `https://api.capgrain.com/wheat-observations`,
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    );
    const data = yield call([response, response.json]);
    debugger;

    yield put(postWheatObservationSuccessAction());
  } catch (error) {
    yield put(postWheatObservationFailureAction());
  }
}
