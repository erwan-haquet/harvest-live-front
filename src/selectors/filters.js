import { REDUCER_KEY } from '../reducers/filters';

export const getSelectedCulture = state => state[REDUCER_KEY].data.selectedCulture;
