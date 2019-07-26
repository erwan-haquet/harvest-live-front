import { createAction } from 'redux-act';

export const openObservationCreationModalAction = createAction('observation-creation-modal/open');
export const closeObservationCreationModalAction = createAction('observation-creation-modal/close');
export const nextStepObservationCreationModalAction = createAction('observation-creation-modal/step/next');
export const previousStepObservationCreationModalAction = createAction('observation-creation-modal/step/previous');
export const setStepObservationCreationModalAction = createAction('observation-creation-modal/step/set');
export const setTypeObservationCreationModalAction = createAction('observation-creation-modal/type/previous');
export const setCultureObservationCreationModalAction = createAction('observation-creation-modal/culture/previous');
