import { takeLatest } from 'redux-saga/effects';

import * as askedPositionActions from '../actions/askedPosition';
import * as askedPositionSagas from './askedPosition';
import * as barleyObservationActions from '../actions/barleyObservation';
import * as barleyObservationSagas from './barleyObservation';

export default function* saga() {
  const relations = [
      [askedPositionActions, askedPositionSagas],
      [barleyObservationActions, barleyObservationSagas],
  ];

  for (const [actions, sagas] of relations) {
    for (const [actionName, action] of Object.entries(actions)) {
      const saga = sagas[actionName];
      if (saga) yield takeLatest(action.getType(), saga);
    }
  }
}
