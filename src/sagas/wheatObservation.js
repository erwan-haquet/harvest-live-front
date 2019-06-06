import { put, call } from 'redux-saga/effects';
import { List } from 'immutable';
import { toWheatObservation } from '../models/wheatObservation';
import {
  fetchWheatObservationsSuccessAction,
  fetchWheatObservationsFailureAction,
} from '../actions/wheatObservation';
import fetch from 'cross-fetch';

export function* fetchWheatObservationsRequestAction({ payload: { bounds } }) {
  try {
    const response = yield call(
      fetch,
      `https://api.capgrain.com/wheat-observations?coordinates[within_box]=[${bounds.southWest.latitude},${bounds.southWest.longitude},${bounds.northEast.latitude},${bounds.northEast.longitude}`,
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
