import { createAction } from 'redux-act';

export const fetchSunflowerObservationsRequestAction = createAction('sunflower-observation/fetch/request');
export const fetchSunflowerObservationsSuccessAction = createAction('sunflower-observation/fetch/success');
export const fetchSunflowerObservationsFailureAction = createAction('sunflower-observation/fetch/failure');

export const postSunflowerObservationRequestAction = createAction('sunflower-observation/post/request');
export const postSunflowerObservationSuccessAction = createAction('sunflower-observation/post/success');
export const postSunflowerObservationFailureAction = createAction('sunflower-observation/post/failure');
