import { Record } from 'immutable';
import { layers } from '../../constants/ui/map';

export const UiMap = Record(
  {
    style: layers.STREET,
  },
  'UiMap',
);

export default UiMap;
