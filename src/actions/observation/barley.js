import { createAction } from 'redux-act';

export const fetchBarleyObservationsRequestAction = createAction('observation/barley/fetch/request');
export const fetchBarleyObservationsSuccessAction = createAction('observation/barley/fetch/success');
export const fetchBarleyObservationsFailureAction = createAction('observation/barley/fetch/failure');

export const postBarleyObservationRequestAction = createAction('observation/barley/post/request');
export const postBarleyObservationSuccessAction = createAction('observation/barley/post/success');
export const postBarleyObservationFailureAction = createAction('observation/barley/post/failure');
