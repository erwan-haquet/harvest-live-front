import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import NavigationBar from '../../NavigationBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import SectionTitle from '../../SectionTitle';
import styles from './styles.module.scss';
import FieldInput from '../../../../common/form/FieldInput';
import validate from './validate';

const UserForm = ({ handleSubmit, previousStep, onSubmit }) => {
  return (
    <Fragment>
      <SectionTitle title="Reseignez vos coordonnées" />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Row>
          <Col xs={12} md={6}>
            <Field
              name="email"
              id="email"
              type="email"
              autoComplete="email"
              component={FieldInput}
              label="Email"
              required
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="phone"
              id="phone"
              type="tel"
              autoComplete="tel"
              component={FieldInput}
              label="Téléphone"
            />
          </Col>
          <Col xs={12}>
            <Alert variant="light">
              Vos données personnelles resteront confidentielles et ne seront
              pas partagées avec la communauté.
            </Alert>
          </Col>
        </Row>
        <div className={styles.navigationWrapper}>
          <NavigationBar
            previousStep={previousStep}
            shouldSubmit={true}
            submitLabel="Envoyer"
          />
        </div>
      </form>
    </Fragment>
  );
};

export default reduxForm({
  form: 'observation',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(UserForm);
