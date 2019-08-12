import { createReducer } from 'redux-act';

import {
    openModal,
    closeModal
} from '../../../actions/ui/modal/observationsWithinBox';

import InitialState from '../../../models/initialState';
import WithinBoxModal from '../../../models/ui/modal/observationsWithinBox';

export const REDUCER_KEY = 'ui/modal/around';

const reducer = createReducer({
        [openModal]: state =>
            state.setIn(['data', 'isOpen'], true),
        [closeModal]: state =>
            state.setIn(['data', 'isOpen'], false)
    },
    new InitialState({
        data: new WithinBoxModal(),
    }),
);

export default {
    [REDUCER_KEY]: reducer,
};