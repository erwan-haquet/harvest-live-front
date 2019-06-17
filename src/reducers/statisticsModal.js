import { createReducer } from 'redux-act';

import {
  openStatisticsModalAction,
  closeStatisticsModalAction,
} from '../actions/statisticsModal';
import InitialState from '../models/initialState';
import StatisticsModal from '../models/statisticsModal';

const reducer = createReducer(
  {
    [openStatisticsModalAction]: state => state.setIn(['data', 'isOpen'], true),
    [closeStatisticsModalAction]: state => state.setIn(['data', 'isOpen'], false),
  },
  new InitialState({
    data: new StatisticsModal(),
  }),
);

export default reducer;
