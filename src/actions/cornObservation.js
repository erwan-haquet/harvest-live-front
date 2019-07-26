import { createAction } from 'redux-act';

export const fetchCornObservationsRequestAction = createAction('corn-observation/post/request');
export const fetchCornObservationsSuccessAction = createAction('corn-observation/post/success');
export const fetchCornObservationsFailureAction = createAction('corn-observation/post/failure');

export const postCornObservationRequestAction = createAction('corn-observation/post/request');
export const postCornObservationSuccessAction = createAction('corn-observation/post/success');
export const postCornObservationFailureAction = createAction('corn-observation/post/failure');
