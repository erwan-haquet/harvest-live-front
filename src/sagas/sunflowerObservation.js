import { put, call } from 'redux-saga/effects';
import { List } from 'immutable';
import { toSunflowerObservation } from '../models/sunflowerObservation';
import {
  fetchSunflowerObservationsSuccessAction,
  fetchSunflowerObservationsFailureAction,
} from '../actions/sunflowerObservation';
import fetch from 'cross-fetch';

export function* fetchSunflowerObservationsRequestAction({ payload: { bounds } }) {
  try {
    const response = yield call(
      fetch,
      `https://api.capgrain.com/sunflower-observations?coordinates[within_box]=[${bounds.southWest.latitude},${bounds.southWest.longitude},${bounds.northEast.latitude},${bounds.northEast.longitude}`,
      {
        headers: {
          accept: 'application/json',
        },
      },
    );
    const data = yield call([response, response.json]);
    const list = new List(
      data.map(observation => toSunflowerObservation(observation)),
    );

    yield put(fetchSunflowerObservationsSuccessAction(list));
  } catch (error) {
    yield put(fetchSunflowerObservationsFailureAction());
  }
}
