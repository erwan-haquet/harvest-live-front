import React from 'react';

import styles from './styles.module.scss';

import Button from 'react-bootstrap/Button';

const NavigationBar = ({ previousStep, onSubmit }) => {
  debugger;
  return (
    <div className={styles.wrapper}>
      {previousStep && (
        <Button
          variant="light"
          onClick={previousStep}
          className={styles.previousButton}
          size="lg"
        >
          Précedent
        </Button>
      )}
      {onSubmit && (
        <Button
          size="lg"
          onClick={onSubmit}
          variant="success"
          type="submit"
          className={styles.nextButton}
        >
          Suivant
        </Button>
      )}
    </div>
  );
};

export default NavigationBar;
