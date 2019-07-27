import { createReducer } from 'redux-act';
import { List } from 'immutable';
import { addToastAction, removeToastAction } from '../../actions/ui/toast';
import InitialState from '../../models/initialState';

export const REDUCER_KEY = 'ui/toast';

const reducer = createReducer(
  {
    [addToastAction]: (state, payload) => {
      return state.update('data', data => data.push(payload));
    },
    [removeToastAction]: (state, payload) =>
      state.update('data', data => data.filterNot(toast => toast === payload)),
  },
  new InitialState({
    data: new List(),
  }),
);

export default {
    [REDUCER_KEY]: reducer,
};
