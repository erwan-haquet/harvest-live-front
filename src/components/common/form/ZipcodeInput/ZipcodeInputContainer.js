import React, { Component } from 'react';
import { connect } from 'react-redux';

import { change } from 'redux-form';
import LatLng from '../../../../models/latLng';
import ZipcodeInput from "./index";

class ZipcodeInputContainer extends Component {
    handleChange = option => {
        const { input, formName, dispatch } = this.props;

        const coordinates = new LatLng({
            longitude: option.value.centre.coordinates[0],
            latitude: option.value.centre.coordinates[1],
        });

        dispatch(change(formName, 'coordinates', coordinates));
        input.onChange(option);
    };

    mapOptionsToValues = options => {
        return options.map(option => ({
            value: option,
            label: `${option.codesPostaux[0]} ${option.nom}`,
        }));
    };

    loadOptions = (inputValue, callback) => {
        if (!inputValue) {
            return callback([]);
        }

        fetch(
            `https://geo.api.gouv.fr/communes?codePostal=${inputValue}&fields=centre,codesPostaux`,
        ).then(response => {
            response.json().then(results => {
                if (this.props.mapOptionsToValues) {
                    callback(this.props.mapOptionsToValues(results));
                } else {
                    callback(this.mapOptionsToValues(results));
                }
            });
        });
        fetch(
            `https://geo.api.gouv.fr/communes?nom=${inputValue}&fields=centre,codesPostaux`,
        ).then(response => {
            response.json().then(results => {
                if (this.props.mapOptionsToValues) {
                    callback(this.props.mapOptionsToValues(results));
                } else {
                    callback(this.mapOptionsToValues(results));
                }
            });
        });
    };

    render() {
        const { props } = this;

        return ( <
            ZipcodeInput value = { props.input.value }
            label = { props.label }
            loadOptions = { this.loadOptions }
            onBlur = { event => event.preventDefault() }
            onChange = { this.handleChange }
            props = { props }
            placeholder = { props.placeholder }
            required = { props.required }
            meta = { props.meta }
            />
        );
    }
}

export default connect()(ZipcodeInputContainer);