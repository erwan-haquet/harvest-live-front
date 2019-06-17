import { createReducer } from 'redux-act';

import {
  toggleColorLegendAction,
} from '../actions/colorLegend';
import InitialState from '../models/initialState';
import ColorLegend from '../models/colorLegend';

const reducer = createReducer(
  {
    [toggleColorLegendAction]: state => state.setIn(['data', 'isOpen'], !state.data.isOpen),
  },
  new InitialState({
    data: new ColorLegend(),
  }),
);

export default reducer;
