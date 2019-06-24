import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import NavigationBar from '../../NavigationBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionTitle from '../../SectionTitle';
import styles from './styles.module.scss';
import validate from './validate';
import TextareaInput from "../../../common/form/TextareaInput";

const ExtraForm = ({ handleSubmit, previousStep, onSubmit }) => {
  return (
    <Fragment>
      <SectionTitle title="Reseignez vos coordonnées" />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Row>
          <Col xs={12} md={6}>
            <Field
                name="comment"
                type="textarea"
                component={TextareaInput}
                label="Commentaire"
            />
          </Col>
        </Row>
        <div className={styles.navigationWrapper}>
          <NavigationBar
            previousStep={previousStep}
            submitLabel="Suivant"
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
})(ExtraForm);
