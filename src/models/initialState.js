import { Record } from 'immutable';

const InitialState = Record(
  {
    isFetching: false,
    isFetchingRequested: false,
    data: null,
  },
);

export default InitialState;
