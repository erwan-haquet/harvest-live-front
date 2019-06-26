import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import NavigationBar from '../../NavigationBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionTitle from '../../SectionTitle';
import styles from './styles.module.scss';
import validate from './validate';
import TextareaInput from '../../../../common/form/TextareaInput';
import MediaImageInputContainer from '../../../../common/form/MediaImageInput/MediaImageInputContainer';

const ExtraForm = ({ handleSubmit, previousStep, onSubmit }) => {
  return (
    <Fragment>
      <SectionTitle title="Extra" />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Row>
          <Col xs={12} md={6}>
            <Field
              name="image"
              component={MediaImageInputContainer}
              label="Prendre une photo"
              formName="observation"
              feedback="Partagez en photo votre ticket d'échantillon, écran de rendement ou un moment sympa de votre moisson :)"
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="comment"
              type="textarea"
              rows="6"
              component={TextareaInput}
              label="Ajouter un commentaire"
            />
          </Col>
        </Row>
        <div className={styles.navigationWrapper}>
          <NavigationBar
            previousStep={previousStep}
            shouldSubmit={true}
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
