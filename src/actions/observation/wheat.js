import { createAction } from 'redux-act';

export const fetchWheatObservationsRequestAction = createAction('observation/wheat/fetch/request');
export const fetchWheatObservationsSuccessAction = createAction('observation/wheat/fetch/success');
export const fetchWheatObservationsFailureAction = createAction('observation/wheat/fetch/failure');

export const postWheatObservationRequestAction = createAction('observation/wheat/fetch/request');
export const postWheatObservationSuccessAction = createAction('observation/wheat/fetch/success');
export const postWheatObservationFailureAction = createAction('observation/wheat/fetch/failure');

