import { createAction } from 'redux-act';

export const setAskedPositionAction = createAction('asked-position/set');

export const setAskedPositionRequestAction = createAction('asked-position/set/request');
export const setAskedPositionSuccessAction = createAction('asked-position/set/success');
export const setAskedPositionFulfillAction = createAction('asked-position/set/fulfill');
