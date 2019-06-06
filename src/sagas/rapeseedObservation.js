import { put, call } from 'redux-saga/effects';
import { List } from 'immutable';
import { toRapeseedObservation } from '../models/rapeseedObservation';
import {
  fetchRapeseedObservationsSuccessAction,
  fetchRapeseedObservationsFailureAction,
} from '../actions/rapeseedObservation';
import fetch from 'cross-fetch';

export function* fetchRapeseedObservationsRequestAction({ payload: { bounds } }) {
  try {
    const response = yield call(
      fetch,
      `https://api.capgrain.com/rapeseed-observations?coordinates[within_box]=[${bounds.southWest.latitude},${bounds.southWest.longitude},${bounds.northEast.latitude},${bounds.northEast.longitude}`,
      {
        headers: {
          accept: 'application/json',
        },
      },
    );
    const data = yield call([response, response.json]);
    const list = new List(
      data.map(observation => toRapeseedObservation(observation)),
    );

    yield put(fetchRapeseedObservationsSuccessAction(list));
  } catch (error) {
    yield put(fetchRapeseedObservationsFailureAction());
  }
}
