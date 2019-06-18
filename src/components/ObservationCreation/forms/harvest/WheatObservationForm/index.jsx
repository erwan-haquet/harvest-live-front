import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import NavigationBar from '../../../NavigationBar';
import { Form, InputGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.scss';
import SectionTitle from '../../../SectionTitle';
import StarRatings from 'react-star-ratings';

const renderFieldInput = ({
  input,
  meta,
  type,
  placeholder,
  min,
  max,
  label,
  append,
}) => {
  return (
    <Form.Group>
      <Form.Label className={styles.label}>{label}</Form.Label>
      <InputGroup>
        <Form.Control
          type={type}
          placeholder={placeholder}
          min={min}
          max={max}
          value={input.value}
          onChange={input.onChange}
        />
        {append && (
          <InputGroup.Append>
            <InputGroup.Text id="inputGroupAppend">{append}</InputGroup.Text>
          </InputGroup.Append>
        )}
      </InputGroup>
    </Form.Group>
  );
};

const renderSelectInput = ({ input, meta, label, choices }) => {
  return (
    <Form.Group>
      <Form.Label className={styles.label}>{label}</Form.Label>
      <Form.Control value={input.value} onChange={input.onChange} as="select">
        {choices.map(choice => (
          <option key={choice.value} value={choice.value}>
            {choice.label}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

const renderTextareaInput = ({ input, meta, label }) => {
  return (
    <Form.Group>
      <Form.Label className={styles.label}>{label}</Form.Label>
      <Form.Control
        value={input.value}
        onChange={input.onChange}
        as="textarea"
      />
    </Form.Group>
  );
};

const renderRatingInput = ({ input, meta, label }) => {
  return (
    <Form.Group>
      <Form.Label className={styles.label}>{label}</Form.Label>
        <br />
      <StarRatings
        rating={input.value}
        starRatedColor="#F37F2B"
        // starDimension="17px"
        // starSpacing="3px"
        changeRating={input.onChange}
        numberOfStars={5}
        name="rating"
      />
    </Form.Group>
  );
};

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
              component={renderSelectInput}
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
              component={renderFieldInput}
              label="Pois spécifique"
              append="kg/hl"
            />
          </Col>
          <Col xs={6}>
            <Field
              name="humidity"
              type="number"
              component={renderFieldInput}
              label="Humidité"
              append="%"
            />
          </Col>
          <Col xs={6}>
            <Field
              name="yield"
              type="number"
              component={renderFieldInput}
              label="Rendement"
              append="q"
            />
          </Col>
          <Col xs={6}>
            <Field
              name="variety"
              type="text"
              component={renderFieldInput}
              label="Variété"
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="nitrogenProductUsed"
              type="select"
              component={renderSelectInput}
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
              component={renderFieldInput}
              label="Quantité d'azote utilisée"
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="targetPrice"
              type="number"
              component={renderFieldInput}
              label="Prix objectif"
              append="€/T"
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="yieldNotation"
              type="number"
              component={renderRatingInput}
              label="Note de rendement comparé aux 5 dernières années"
              append="€/T"
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="comment"
              type="textarea"
              component={renderTextareaInput}
              label="Commentaire"
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
  },
})(WheatObservationForm);

// - "place": "Madison square park"
