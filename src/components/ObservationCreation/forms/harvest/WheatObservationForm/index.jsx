import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import NavigationBar from '../../../NavigationBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.scss';
import SectionTitle from '../../../SectionTitle';
import FieldInput from '../../../../common/form/FieldInput';
import SelectInput from '../../../../common/form/SelectInput';
import RatingInput from '../../../../common/form/RatingInput';
import TextareaInput from '../../../../common/form/TextareaInput';
import ZipcodeInputContainer from '../../../../common/form/ZipcodeInput/ZipcodeInputContainer';
import LatLng from "../../../../../models/latLng";

const WheatObservationForm = ({ handleSubmit, previousStep, onSubmit }) => {
  return (
    <Fragment>
      <SectionTitle title="Reseignez votre observation" />

      <form onSubmit={handleSubmit} className={styles.form}>
        <Row>
          <Col xs={12} md={6}>
            <Field
              name="cultivationMethod"
              type="select"
              component={SelectInput}
              label="Méthode de culture"
              choices={[
                { value: 'conventional', label: 'Conventionnel' },
                { value: 'simplified cultivation methods', label: 'TCS' },
                { value: 'organic farming', label: 'Bio' },
              ]}
            />
          </Col>
          <Col xs={6}>
            <Field
              name="specificWeight"
              type="number"
              component={FieldInput}
              label="Pois spécifique"
              append="kg/hl"
            />
          </Col>
          <Col xs={6}>
            <Field
              name="humidity"
              type="number"
              component={FieldInput}
              label="Humidité"
              append="%"
            />
          </Col>
          <Col xs={6}>
            <Field
              name="yield"
              type="number"
              component={FieldInput}
              label="Rendement"
              append="q"
            />
          </Col>
          <Col xs={6}>
            <Field
              name="variety"
              type="text"
              component={FieldInput}
              label="Variété"
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="nitrogenProductUsed"
              type="select"
              component={SelectInput}
              label="Engrais Azoté utilisé"
              choices={[
                { value: 'Solution Azotée', label: 'Solution Azotée' },
                { value: 'Ammonitrate', label: 'Ammonitrate' },
                { value: 'Urée 46', label: 'Urée 46' },
                { value: 'Autre engrais azoté', label: 'Autre engrais azoté' },
              ]}
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="nitrogenQuantityUsed"
              type="number"
              component={FieldInput}
              label="Quantité d'azote utilisée"
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="targetPrice"
              type="number"
              component={FieldInput}
              label="Prix objectif"
              append="€/T"
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="yieldNotation"
              type="number"
              component={RatingInput}
              label="Note de rendement comparé aux 5 dernières années"
              append="€/T"
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="comment"
              type="textarea"
              component={TextareaInput}
              label="Commentaire"
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="place"
              type="select"
              component={ZipcodeInputContainer}
              label="Code postal"
              formName="observation"
            />
          </Col>
        </Row>
      </form>
      <NavigationBar previousStep={previousStep} onSubmit={onSubmit} />
    </Fragment>
  );
};

export default reduxForm({
  form: 'observation',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  initialValues: {
    cultivationMethod: 'conventional',
    yieldNotation: 2,
    coordinates: new LatLng(),
  },
})(WheatObservationForm);
