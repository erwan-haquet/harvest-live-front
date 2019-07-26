import { REDUCER_KEY } from '../reducers/askedPosition';

export const getAskedPosition = state => state[REDUCER_KEY].data;
export const isFetching = state => state[REDUCER_KEY].isFetching;
