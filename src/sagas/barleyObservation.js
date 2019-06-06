import { put, call } from 'redux-saga/effects';
import { List } from 'immutable';
import { toBarleyObservation } from '../models/barleyObservation';
import {
  fetchBarleyObservationsSuccessAction,
  fetchBarleyObservationsFailureAction,
} from '../actions/barleyObservation';
import fetch from 'cross-fetch';

export function* fetchBarleyObservationsRequestAction({ payload: { bounds } }) {
  try {
    const response = yield call(
      fetch,
      `https://api.capgrain.com/barley-observations?coordinates[within_box]=[${bounds.southWest.latitude},${bounds.southWest.longitude},${bounds.northEast.latitude},${bounds.northEast.longitude}`,
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
