import { createAction } from 'redux-act';

export const fetchCornObservationsRequestAction = createAction();
export const fetchCornObservationsSuccessAction = createAction();
export const fetchCornObservationsFailureAction = createAction();

export const postCornObservationRequestAction = createAction();
export const postCornObservationSuccessAction = createAction();
export const postCornObservationFailureAction = createAction();
