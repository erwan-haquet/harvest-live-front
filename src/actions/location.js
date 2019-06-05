import { createAction } from 'redux-act';

export const locationFromGeolocationRequestAction = createAction();
export const locationFromGeolocationSuccessAction = createAction();
export const locationFromGeolocationFailureAction = createAction();