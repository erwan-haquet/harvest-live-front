import { REDUCER_KEY } from '../reducers/toast';

export const getToasts = state => state[REDUCER_KEY].data;
