import { createReducer } from 'redux-act';
import InitialState from '../../models/initialState';
import UiMap from '../../models/ui/map';
import { setStyle } from '../../actions/ui/map';

export const REDUCER_KEY = 'ui/map';

const reducer = createReducer(
  {
    [setStyle]: (state, payload) => state.setIn(['data', 'style'], payload),
  },
  new InitialState({ data: new UiMap() }),
);

export default {
  [REDUCER_KEY]: reducer,
};
