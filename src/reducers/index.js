import location from './location';
import askedPosition from './askedPosition';
import barleyObservation from './barleyObservation';
import cornObservation from './cornObservation';
import rapeseedObservation from './rapeseedObservation';
import sunflowerObservation from './sunflowerObservation';
import wheatObservation from './wheatObservation';
import selectedObservation from './selectedObservation';
import ObservationDetailsModal from './ui/modal/observation/details';
import toast from './ui/toast';
import map from './ui/map';
import filters from './filters';
import observationCreationModal from './ui/modal/observation/creation';

export default {
  ...location,
  ...askedPosition,
  ...barleyObservation,
  ...cornObservation,
  ...rapeseedObservation,
  ...sunflowerObservation,
  ...wheatObservation,
  ...selectedObservation,
  ...ObservationDetailsModal,
  ...toast,
  ...map,
  ...filters,
  ...observationCreationModal,
};
