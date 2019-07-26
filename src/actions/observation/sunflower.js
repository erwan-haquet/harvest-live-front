import { createAction } from 'redux-act';

export const fetchSunflowerObservationsRequestAction = createAction('observation/sunflower/fetch/request');
export const fetchSunflowerObservationsSuccessAction = createAction('observation/sunflower/fetch/success');
export const fetchSunflowerObservationsFailureAction = createAction('observation/sunflower/fetch/failure');

export const postSunflowerObservationRequestAction = createAction('observation/sunflower/post/request');
export const postSunflowerObservationSuccessAction = createAction('observation/sunflower/post/success');
export const postSunflowerObservationFailureAction = createAction('observation/sunflower/post/failure');
