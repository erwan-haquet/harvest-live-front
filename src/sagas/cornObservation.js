import { put, call } from 'redux-saga/effects';
import { List } from 'immutable';
import { toCornObservation } from '../models/cornObservation';
import {
  fetchCornObservationsSuccessAction,
  fetchCornObservationsFailureAction,
} from '../actions/cornObservation';
import fetch from 'cross-fetch';

export function* fetchCornObservationsRequestAction({ payload: { bounds } }) {
  try {
    const response = yield call(
      fetch,
      `https://api.capgrain.com/corn-observations?coordinates[within_box]=[${bounds.southWest.latitude},${bounds.southWest.longitude},${bounds.northEast.latitude},${bounds.northEast.longitude}`,
      {
        headers: {
          accept: 'application/json',
        },
      },
    );
    const data = yield call([response, response.json]);
    const list = new List(
      data.map(observation => toCornObservation(observation)),
    );

    yield put(fetchCornObservationsSuccessAction(list));
  } catch (error) {
    yield put(fetchCornObservationsFailureAction());
  }
}
