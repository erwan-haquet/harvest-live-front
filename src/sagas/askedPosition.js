import { put } from 'redux-saga/effects';
import {
  setAskedPositionFulfillAction,
  setAskedPositionRequestAction,
  setAskedPositionSuccessAction,
} from '../actions/askedPosition';

export function* setAskedPositionAction({ payload }) {
  yield put(setAskedPositionRequestAction());
  yield put(setAskedPositionSuccessAction(payload));
  yield put(setAskedPositionFulfillAction());
}
