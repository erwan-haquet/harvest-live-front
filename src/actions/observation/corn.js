import { createAction } from 'redux-act';

export const fetchCornObservationsRequestAction = createAction('observation/corn/post/request');
export const fetchCornObservationsSuccessAction = createAction('observation/corn/post/success');
export const fetchCornObservationsFailureAction = createAction('observation/corn/post/failure');

export const postCornObservationRequestAction = createAction('observation/corn/post/request');
export const postCornObservationSuccessAction = createAction('observation/corn/post/success');
export const postCornObservationFailureAction = createAction('observation/corn/post/failure');
