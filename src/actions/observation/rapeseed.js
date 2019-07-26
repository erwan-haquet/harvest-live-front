import { createAction } from 'redux-act';

export const fetchRapeseedObservationsRequestAction = createAction('observation/rapeseed/fetch/request');
export const fetchRapeseedObservationsSuccessAction = createAction('observation/rapeseed/fetch/success');
export const fetchRapeseedObservationsFailureAction = createAction('observation/rapeseed/fetch/failure');

export const postRapeseedObservationRequestAction = createAction('observation/rapeseed/post/request');
export const postRapeseedObservationSuccessAction = createAction('observation/rapeseed/post/success');
export const postRapeseedObservationFailureAction = createAction('observation/rapeseed/post/failure');
