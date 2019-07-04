import L from 'leaflet';

import styles from './styles.module.scss';

export const createClusterCustomIcon = cluster => {
  const count = cluster.getChildCount();

  return L.divIcon({
    html: `<div class="circle"> <span class="count">${count}</span>  </div>`,
    className: styles.cluster,
  });
};
