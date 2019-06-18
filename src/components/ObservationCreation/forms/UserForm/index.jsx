import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import NavigationBar from '../../NavigationBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionTitle from '../../SectionTitle';
import styles from './styles.module.scss';
import FieldInput from "../../../common/form/FieldInput";
import validate from './validate';

const UserForm = ({ handleSubmit, previousStep, onSubmit }) => {
    return (
        <Fragment>
            <SectionTitle title="Reseignez vos coordonnées" />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <Row>
                    <Col xs={6}>
                        <Field
                            name="email"
                            type="email"
                            component={FieldInput}
                            label="Email"
                            required
                        />
                    </Col>
                    <Col xs={6}>
                        <Field
                            name="phone"
                            type="tel"
                            component={FieldInput}
                            label="Téléphone"
                        />
                    </Col>
                </Row>
                <div className={styles.navigationWrapper}>
                    <NavigationBar previousStep={previousStep} shouldSubmit={true} submitLabel="Envoyer" />
                </div>
            </form>
        </Fragment>
    );
};

export default reduxForm({
    form: 'observation',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(UserForm);
