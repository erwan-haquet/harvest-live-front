import { all } from 'redux-saga/effects';

import { sagas as askedPositionSagas } from './askedPosition';
import { sagas as barleyObservationSagas } from './observation/barley';
import { sagas as cornObservationSagas } from './observation/corn';
import { sagas as rapeseedObservationSagas } from './observation/rapeseed';
import { sagas as sunflowerObservationSagas } from './observation/sunflower';
import { sagas as wheatObservationSagas } from './observation/wheat';
import { sagas as toastSagas } from './ui/toast';

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
