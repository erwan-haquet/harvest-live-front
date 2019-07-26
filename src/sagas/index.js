import { all } from 'redux-saga/effects';

import { sagas as askedPositionSagas } from './askedPosition';
import { sagas as barleyObservationSagas } from './barleyObservation';
import { sagas as cornObservationSagas } from './cornObservation';
import { sagas as rapeseedObservationSagas } from './rapeseedObservation';
import { sagas as sunflowerObservationSagas } from './sunflowerObservation';
import { sagas as wheatObservationSagas } from './wheatObservation';
import { sagas as toastSagas } from './toast';

export default function* saga() {
  yield all([
    ...askedPositionSagas,
    ...barleyObservationSagas,
    ...cornObservationSagas,
    ...rapeseedObservationSagas,
    ...sunflowerObservationSagas,
    ...wheatObservationSagas,
    ...toastSagas,
  ]);
}
