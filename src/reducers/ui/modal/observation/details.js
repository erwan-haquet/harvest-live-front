import {createReducer} from 'redux-act';

import {
    openObservationDetailsModalAction,
    closeObservationDetailsModalAction,
    selectObservationAction,
} from '../../../../actions/ui/modal/observation/details';
import InitialState from '../../../../models/initialState';
import ObservationDetailsModal from '../../../../models/ui/modal/observation/details';

export const REDUCER_KEY = 'ui/modal/observation/details';

const reducer = createReducer(
    {
        [openObservationDetailsModalAction]: state =>
            state.setIn(['data', 'isOpen'], true),
        [closeObservationDetailsModalAction]: state =>
            state.setIn(['data', 'isOpen'], false),
        [selectObservationAction]: (state, payload) =>
            state.setIn(['data', 'observation'], payload),
    },
    new InitialState({
        data: new ObservationDetailsModal(),
    }),
);

export default {
    [REDUCER_KEY]: reducer,
};

