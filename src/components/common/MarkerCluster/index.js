import L from 'leaflet';
import cx from 'classnames';

import styles from './styles.module.scss';

export const createClusterCustomIcon = ({ cluster, observationType }) => {
  const count = cluster.getChildCount();

  return L.divIcon({
    html: `<div class="circle ${observationType}"> <span class="count">${count}</span>  </div>`,
    className: cx(styles.cluster, styles[observationType]),
  });
};
