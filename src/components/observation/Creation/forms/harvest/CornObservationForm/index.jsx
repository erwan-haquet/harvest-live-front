import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import NavigationBar from '../../../NavigationBar';
import validate from './validate';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.scss';
import SectionTitle from '../../../SectionTitle';
import FieldInput from '../../../../../common/form/FieldInput';
import SelectInput from '../../../../../common/form/SelectInput';
import RatingInput from '../../../../../common/form/RatingInput';
import ZipcodeInputContainer from '../../../../../common/form/ZipcodeInput/ZipcodeInputContainer';
import LatLng from '../../../../../../models/latLng';

const CornObservationForm = ({ handleSubmit, previousStep, onSubmit }) => {
  return (
    <Fragment>
      <SectionTitle title="Reseignez votre observation" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12} md={6}>
            <Field
              name="place"
              type="select"
              component={ZipcodeInputContainer}
              label="Lieu de la récolte"
              formName="observation"
              placeholder="votre code postal"
              required
            />
          </Col>
          <Col xs={6}>
            <Field
              name="yield"
              type="number"
              component={FieldInput}
              label="Rendement"
              append="q"
              required
            />
          </Col>
          <Col xs={6}>
            <Field
              name="humidity"
              type="number"
              component={FieldInput}
              label="Humidité"
              append="%"
              required
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="cultivationMethod"
              type="select"
              component={SelectInput}
              label="Pratique culturale"
              required
              choices={[
                { value: 'conventional', label: 'Conventionnel' },
                { value: 'simplified cultivation methods', label: 'TCS' },
                { value: 'organic farming', label: 'Bio' },
              ]}
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="variety"
              type="text"
              component={FieldInput}
              label="Variété"
            />
          </Col>
          <Col md={6} />
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
              append="u"
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="yieldNotation"
              type="number"
              component={RatingInput}
              label="Note de rendement comparé aux 5 dernières années"
              legends={{
                1: 'Nettement inférieur',
                2: 'Inférieur',
                3: 'Moyen',
                4: 'Supérieur',
                5: 'Nettement supérieur',
              }}
              append="€/T"
              required
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="targetPrice"
              type="number"
              component={FieldInput}
              label="Prix objectif de vente"
              append="€/T"
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
  initialValues: {
    yieldNotation: -1,
    coordinates: new LatLng(),
  },
})(CornObservationForm);
