import { createReducer } from 'redux-act';

import {
    openWithinBoxModal,
    closeWithinBoxModal
} from '../../../actions/ui/modal/withinbox';

import InitialState from '../../../models/initialState';
import WithinBoxModal from '../../../models/ui/modal/withinbox';

export const REDUCER_KEY = 'ui/modal/around';

const reducer = createReducer(
    {
        [openWithinBoxModal]: state =>
            state.setIn(['data', 'isOpen'], true),
        [closeWithinBoxModal]: state =>
            state.setIn(['data', 'isOpen'], false)
    },
    new InitialState({
      data: new WithinBoxModal(),
    }),
);

export default {
    [REDUCER_KEY]: reducer,
};