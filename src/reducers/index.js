import location from './location';
import askedPosition from './askedPosition';
import barleyObservation from './observation/barley';
import cornObservation from './observation/corn';
import rapeseedObservation from './observation/rapeseed';
import sunflowerObservation from './observation/sunflower';
import wheatObservation from './observation/wheat';
import ObservationDetailsModal from './ui/modal/observation/details';
import toast from './ui/toast';
import map from './ui/map';
import filters from './ui/filters';
import observationCreationModal from './ui/modal/observation/creation';
import withinBoxModal from './ui/modal/observationsWithinBox';

export default {
    ...location,
    ...askedPosition,
    ...barleyObservation,
    ...cornObservation,
    ...rapeseedObservation,
    ...sunflowerObservation,
    ...wheatObservation,
    ...ObservationDetailsModal,
    ...toast,
    ...map,
    ...filters,
    ...observationCreationModal,
    ...withinBoxModal
};