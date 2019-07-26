import location from './location';
import askedPosition from './askedPosition';
import barleyObservation from './barleyObservation';
import cornObservation from './cornObservation';
import rapeseedObservation from './rapeseedObservation';
import sunflowerObservation from './sunflowerObservation';
import wheatObservation from './wheatObservation';
import selectedObservation from './selectedObservation';
import ObservationDetailsPopover from './ui/observationDetailsPopover';
import toast from './ui/toast';
import map from './ui/map';
import filters from './filters';
import observationCreationModal from './ui/observationCreationModal';

export default {
  ...location,
  ...askedPosition,
  ...barleyObservation,
  ...cornObservation,
  ...rapeseedObservation,
  ...sunflowerObservation,
  ...wheatObservation,
  ...selectedObservation,
  ...ObservationDetailsPopover,
  ...toast,
  ...map,
  ...filters,
  ...observationCreationModal,
};
