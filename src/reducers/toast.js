import { createReducer } from 'redux-act';
import { List } from 'immutable';
import { addToastAction, removeToastAction } from '../actions/toast';
import InitialState from '../models/initialState';

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

export default reducer;