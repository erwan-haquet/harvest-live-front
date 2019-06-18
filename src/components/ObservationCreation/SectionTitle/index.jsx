import React from 'react';

import styles from './styles.module.scss';

const SectionTitle = ({ title }) => (
  <h5 className={styles.title}>{title}</h5>
);

export default SectionTitle;
