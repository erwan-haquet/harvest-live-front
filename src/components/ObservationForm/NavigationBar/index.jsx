import React from 'react';

import styles from './styles.module.scss';

import Button from 'react-bootstrap/Button';

const NavigationBar = ({ previousStep, nextStep }) => {
  return (
    <div className={styles.wrapper}>
      {previousStep && (
        <Button
          variant="light"
          onClick={previousStep}
          className={styles.previousButton}
        >
          Précedent
        </Button>
      )}
      {nextStep && (
        <Button
          variant="success"
          onClick={nextStep}
          className={styles.nextButton}
        >
          Suivant
        </Button>
      )}
    </div>
  );
};

export default NavigationBar;
