import { takeLatest } from 'redux-saga/effects';

import * as locationActions from '../actions/location';
import * as locationSagas from './location';

export default function* saga() {
  const relations = [[locationActions, locationSagas]];

  for (const [actions, sagas] of relations) {
    for (const [actionName, action] of Object.entries(actions)) {
      const saga = sagas[actionName];
      if (saga) yield takeLatest(action.getType(), saga);
    }
  }
}
