import { createAction } from 'redux-act';

export const openObservationCreationModalAction = createAction('ui/observation-creation-modal/open');
export const closeObservationCreationModalAction = createAction('ui/observation-creation-modal/close');
export const nextStepObservationCreationModalAction = createAction('ui/observation-creation-modal/step/next');
export const previousStepObservationCreationModalAction = createAction('ui/observation-creation-modal/step/previous');
export const setStepObservationCreationModalAction = createAction('ui/observation-creation-modal/step/set');
export const setTypeObservationCreationModalAction = createAction('ui/observation-creation-modal/type/set');
export const setCultureObservationCreationModalAction = createAction('ui/observation-creation-modal/culture/set');
