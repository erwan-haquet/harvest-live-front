import { createAction } from 'redux-act';

// TODO This should not leave here, this specific case should be handled otherwise
export const createObservationToastAction = createAction('ui/toasts/create/observation');

export const createToastAction = createAction('ui/toasts/create');
export const addToastAction = createAction('ui/toasts/add');
export const removeToastAction = createAction('ui/toasts/remove');
