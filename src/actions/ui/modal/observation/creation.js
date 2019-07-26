import { createAction } from 'redux-act';

export const openModalAction = createAction(
  'ui/modal/observation/creation/open',
);
export const closeModalAction = createAction(
  'ui/modal/observation/creation/close',
);
export const nextStepAction = createAction(
  'ui/modal/observation/creation/step/next',
);
export const previousStepAction = createAction(
  'ui/modal/observation/creation/step/previous',
);
export const setStepAction = createAction(
  'ui/modal/observation/creation/step/set',
);
export const setTypeAction = createAction(
  'ui/modal/observation/creation/type/set',
);
export const setCultureAction = createAction(
  'ui/modal/observation/creation/culture/set',
);
