import { createAction } from 'redux-act';

export const fetchBarleyObservationsRequestAction = createAction('barley-observation/fetch/request');
export const fetchBarleyObservationsSuccessAction = createAction('barley-observation/fetch/success');
export const fetchBarleyObservationsFailureAction = createAction('barley-observation/fetch/failure');

export const postBarleyObservationRequestAction = createAction('barley-observation/post/request');
export const postBarleyObservationSuccessAction = createAction('barley-observation/post/success');
export const postBarleyObservationFailureAction = createAction('barley-observation/post/failure');
