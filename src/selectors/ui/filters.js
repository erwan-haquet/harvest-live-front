import { REDUCER_KEY } from '../../reducers/ui/filters';

export const getSelectedCulture = state => state[REDUCER_KEY].data.selectedCulture;
