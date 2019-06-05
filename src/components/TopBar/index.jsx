import React from 'react';
import Button from 'react-bootstrap/Button'

import logo from '../../images/logo.png';
import styles from './styles.module.scss';

const TopBar = () => (
  <div className={styles.wrapper}>
    <div className={styles.brand}>
      <img src={logo} alt="logo" className={styles.logo} />
      <h5 className={styles.teaser}>Moisson Live</h5>
    </div>
    <Button variant="primary">Primary</Button>
  </div>
);

export default TopBar;
