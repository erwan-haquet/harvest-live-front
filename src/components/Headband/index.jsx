import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

const Headband = () => (
  <div className={styles.wrapper}>
    <a
      className={styles.link}
      href="https://youtu.be/XrPGw6tZl9c"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faVideo} className={styles.icon} />
      <span className={styles.desktop}>
        Les consommateurs vous encouragent pendant la moisson en vidéo
      </span>
      <span className={styles.mobile}>
        Les consommateurs vous encouragent en video
      </span>
    </a>
  </div>
);

export default Headband;
