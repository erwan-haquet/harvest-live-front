import { REDUCER_KEY } from '../../reducers/ui/toast';

export const getToasts = state => state[REDUCER_KEY].data;
