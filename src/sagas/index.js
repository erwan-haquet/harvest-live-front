import { takeEvery } from 'redux-saga/effects';

import * as askedPositionActions from '../actions/askedPosition';
import * as askedPositionSagas from './askedPosition';

import * as barleyObservationActions from '../actions/barleyObservation';
import * as barleyObservationSagas from './barleyObservation';

import * as cornObservationActions from '../actions/cornObservation';
import * as cornObservationSagas from './cornObservation';

import * as rapeseedObservationActions from '../actions/rapeseedObservation';
import * as rapeseedObservationSagas from './rapeseedObservation';

import * as sunflowerObservationActions from '../actions/sunflowerObservation';
import * as sunflowerObservationSagas from './sunflowerObservation';

import * as wheatObservationActions from '../actions/wheatObservation';
import * as wheatObservationSagas from './wheatObservation';

import * as toastActions from '../actions/toast';
import * as toastSagas from './toast';

export default function* saga() {
  const relations = [
      [askedPositionActions, askedPositionSagas],
      [barleyObservationActions, barleyObservationSagas],
      [cornObservationActions, cornObservationSagas],
      [rapeseedObservationActions, rapeseedObservationSagas],
      [sunflowerObservationActions, sunflowerObservationSagas],
      [wheatObservationActions, wheatObservationSagas],
      [toastActions, toastSagas],
  ];

  for (const [actions, sagas] of relations) {
    for (const [actionName, action] of Object.entries(actions)) {
      const saga = sagas[actionName];
      if (saga) yield takeEvery(action.getType(), saga);
    }
  }
}
