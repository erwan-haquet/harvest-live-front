import { createAction } from 'redux-act';

export const createObservationToastAction = createAction('toasts/create/observation');
export const createToastAction = createAction('toasts/create');
export const addToastAction = createAction('toasts/add');
export const removeToastAction = createAction('toasts/remove');
