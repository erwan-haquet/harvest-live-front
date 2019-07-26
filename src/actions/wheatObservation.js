import { createAction } from 'redux-act';

export const fetchWheatObservationsRequestAction = createAction('wheat-observation/fetch/request');
export const fetchWheatObservationsSuccessAction = createAction('wheat-observation/fetch/success');
export const fetchWheatObservationsFailureAction = createAction('wheat-observation/fetch/failure');

export const postWheatObservationRequestAction = createAction('wheat-observation/fetch/request');
export const postWheatObservationSuccessAction = createAction('wheat-observation/fetch/success');
export const postWheatObservationFailureAction = createAction('wheat-observation/fetch/failure');

