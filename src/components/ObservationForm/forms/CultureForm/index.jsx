import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './styles.module.scss';

import wheat from '../../../../images/wheat.jpg';
import rapeseed from '../../../../images/rapeseed.jpg';
import corn from '../../../../images/corn.jpg';
import sunflower from '../../../../images/sunflower.jpg';
import barley from '../../../../images/barley.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const renderCheckbox = ({ type, input, image, id, culture }) => {
  return (
    <label className={styles.label}>
      <input
        type={type}
        name={input.name}
        id={id}
        checked
        value={input.value}
        onChange={input.onChange}
        className={styles.radio}
      />
      <img src={image} className={styles.image} alt="selection" />
      <h5 className={styles.culture}>{culture}</h5>
    </label>
  );
};

const CultureForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col xs={4} md={3} lg={{ span: 2, offset: 1 }} className={styles.col}>
          <Field
            type="radio"
            name="culture"
            component={renderCheckbox}
            image={wheat}
            id="wheat"
            culture="Blé"
          />
        </Col>
        <Col xs={4} md={3} lg={2} className={styles.col}>
          <Field
            type="radio"
            name="culture"
            component={renderCheckbox}
            image={rapeseed}
            id="rapeseed"
            culture="Colza"
          />
        </Col>
        <Col xs={4} md={3} lg={2} className={styles.col}>
          <Field
            type="radio"
            name="culture"
            component={renderCheckbox}
            image={sunflower}
            id="sunflower"
            culture="Tournesol"
          />
        </Col>
        <Col xs={4} md={3} lg={2} className={styles.col}>
          <Field
            type="radio"
            name="culture"
            component={renderCheckbox}
            image={corn}
            id="corn"
            culture="Maïs"
          />
        </Col>
        <Col xs={4} md={3} lg={2} className={styles.col}>
          <Field
            type="radio"
            name="culture"
            component={renderCheckbox}
            image={barley}
            id="barley"
            culture="Orge"
          />
        </Col>
      </Row>
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(CultureForm);
