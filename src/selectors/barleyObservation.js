import { REDUCER_KEY } from '../reducers/barleyObservation';

export const getBarleyObservations = state => state[REDUCER_KEY].data;
