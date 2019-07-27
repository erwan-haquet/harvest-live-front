import { createAction } from 'redux-act';

export const openObservationDetailsModalAction = createAction('ui/modal/observation/details/open');
export const closeObservationDetailsModalAction = createAction('ui/modal/observation/details/close');
export const selectObservationAction = createAction('ui/modal/observation/details/observation/select',);
