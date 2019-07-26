import { REDUCER_KEY } from '../../reducers/observation/wheat';

export const getWheatObservations = state => state[REDUCER_KEY].data;
