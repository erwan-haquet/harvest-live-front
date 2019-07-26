import { REDUCER_KEY } from '../reducers/observationCreationModal';

export const isObservationCreationModalOpen = state => state[REDUCER_KEY].data.isOpen;
export const getCurrentStep = state => state[REDUCER_KEY].data.currentStep;
export const getType = state => state[REDUCER_KEY].data.type;
export const getCulture = state => state[REDUCER_KEY].data.culture;
