import { REDUCER_KEY } from '../../reducers/observation/barley';

export const getBarleyObservations = state => state[REDUCER_KEY].data;
