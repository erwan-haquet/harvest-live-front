import React from 'react';
import ToastContainer from '../Toast/ToastContainer';

import styles from './styles.module.scss';

const ToastList = ({ toasts }) => (
  <div className={styles.toastList}>
    {toasts.map((toast, index) => (
      <ToastContainer key={index} toast={toast} />
    ))}
  </div>
);

export default ToastList;

