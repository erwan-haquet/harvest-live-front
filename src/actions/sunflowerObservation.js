import { createAction } from 'redux-act';

export const fetchSunflowerObservationsRequestAction = createAction();
export const fetchSunflowerObservationsSuccessAction = createAction();
export const fetchSunflowerObservationsFailureAction = createAction();

export const postSunflowerObservationRequestAction = createAction();
export const postSunflowerObservationSuccessAction = createAction();
export const postSunflowerObservationFailureAction = createAction();
