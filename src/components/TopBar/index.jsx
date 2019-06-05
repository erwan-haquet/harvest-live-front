import React from 'react';

import logo from '../../images/logo.png';
import styles from './styles.module.css';

const TopBar = () => (
  <div className={styles.wrapper}>
    <div className={styles.brand}>
      <img src={logo} alt="logo" className={styles.logo} />
      <h3 className={styles.teaser}>Moisson-live</h3>
    </div>
  </div>
);

export default TopBar;
