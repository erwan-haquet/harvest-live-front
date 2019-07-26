import { takeEvery, put } from 'redux-saga/effects';
import {
  setAskedPositionAction,
  setAskedPositionFulfillAction,
  setAskedPositionRequestAction,
  setAskedPositionSuccessAction,
} from '../actions/askedPosition';

export function* watchAskedPosition({ payload }) {
  yield put(setAskedPositionRequestAction());
  yield put(setAskedPositionSuccessAction(payload));
  yield put(setAskedPositionFulfillAction());
}

export const sagas = [
    takeEvery(setAskedPositionAction, watchAskedPosition)
];
