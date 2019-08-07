import { createReducer } from 'redux-act';

import {
    openAroundModal,
    closeAroundModal
} from '../../../actions/ui/modal/around';

import InitialState from '../../../models/initialState';
import AroundModal from '../../../models/ui/modal/around';

export const REDUCER_KEY = 'ui/modal/around';

const reducer = createReducer(
    {
        [openAroundModal]: state =>
            state.setIn(['data', 'isOpen'], true),
        [closeAroundModal]: state =>
            state.setIn(['data', 'isOpen'], false)
    },
    new InitialState({
      data: new AroundModal(),
    }),
);

export default {
    [REDUCER_KEY]: reducer,
};