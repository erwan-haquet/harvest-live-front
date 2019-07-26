import { REDUCER_KEY } from '../reducers/selectedObservation';

export const getSelectedObservation = state => state[REDUCER_KEY].data;
