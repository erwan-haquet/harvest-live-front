import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSmile, faFrown } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

import styles from './styles.module.scss';

const Toast = ({ title, body, variant, onClose }) => (
  <div className={styles.toast}>
    <div className={styles.header}>
      <span className={styles.closeButton} onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </span>
      {variant === 'success' && (
        <div className={cx(styles.iconWrapper, styles.success)}>
          <FontAwesomeIcon icon={faSmile} />
        </div>
      )}
      {variant === 'danger' && (
        <div className={cx(styles.iconWrapper, styles.danger)}>
          <FontAwesomeIcon icon={faFrown} />
        </div>
      )}
      <strong>{title}</strong>
    </div>
    <div className={styles.body}>{body}</div>
  </div>
);

export default Toast;
