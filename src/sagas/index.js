import { takeLatest } from 'redux-saga/effects';

import * as askedPositionActions from '../actions/askedPosition';
import * as askedPositionSagas from './askedPosition';

export default function* saga() {
  const relations = [[askedPositionActions, askedPositionSagas]];

  for (const [actions, sagas] of relations) {
    for (const [actionName, action] of Object.entries(actions)) {
      const saga = sagas[actionName];
      if (saga) yield takeLatest(action.getType(), saga);
    }
  }
}
