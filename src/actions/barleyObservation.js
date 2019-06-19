import { createAction } from 'redux-act';

export const fetchBarleyObservationsRequestAction = createAction();
export const fetchBarleyObservationsSuccessAction = createAction();
export const fetchBarleyObservationsFailureAction = createAction();

export const postBarleyObservationRequestAction = createAction();
export const postBarleyObservationSuccessAction = createAction();
export const postBarleyObservationFailureAction = createAction();
