import { REDUCER_KEY } from '../../../../reducers/ui/modal/observation/details';

export const isObservationDetailsModalOpen = state => state[REDUCER_KEY].data.isOpen;
export const getSelectedObservation = state => state[REDUCER_KEY].data.observation;
