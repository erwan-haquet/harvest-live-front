import { createAction } from 'redux-act';

// TODO This should not leave here, this specific case should be handled otherwise
export const createObservationToastAction = createAction('ui/toast/create/observation');

export const createToastAction = createAction('ui/toast/create');
export const addToastAction = createAction('ui/toast/add');
export const removeToastAction = createAction('ui/toast/remove');
