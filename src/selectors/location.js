import { REDUCER_KEY } from '../reducers/location';

export const getLocation = state => state[REDUCER_KEY].data;
export const getLocationCoords = state => state[REDUCER_KEY].data.position;
