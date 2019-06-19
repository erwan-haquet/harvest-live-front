import { Record } from 'immutable';

export const Toast = Record(
  {
    title: null,
    body: null,
    variant: null,
  },
  'Toast',
);

export default Toast;
