import { createAction } from 'redux-act';

export const fetchRapeseedObservationsRequestAction = createAction('rapeseed-observation/fetch/request');
export const fetchRapeseedObservationsSuccessAction = createAction('rapeseed-observation/fetch/success');
export const fetchRapeseedObservationsFailureAction = createAction('rapeseed-observation/fetch/failure');

export const postRapeseedObservationRequestAction = createAction('rapeseed-observation/post/request');
export const postRapeseedObservationSuccessAction = createAction('rapeseed-observation/post/success');
export const postRapeseedObservationFailureAction = createAction('rapeseed-observation/post/failure');
