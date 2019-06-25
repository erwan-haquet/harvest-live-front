import React, { Component } from 'react';
import { connect } from 'react-redux';

import MediaImageInput from './index';
import fetch from 'cross-fetch';
import { createToastAction } from '../../../../actions/toast';
import Toast from '../../../../models/toast';
import { change } from 'redux-form';
import MediaObject from '../../../../models/mediaObject';
import Spinner from '../../Spinner';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

class MediaImageInputContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploading: false,
      mediaObject: new MediaObject(),
    };
  }

  handleChange = e => {
    const { dispatch, formName, input } = this.props;

    const files = Array.from(e.target.files);
    this.setState({ uploading: true });

    let formData = new FormData();
    formData.append('file', files[0]);

    fetch(`${apiUrl}/media-objects`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
      },
      body: formData,
    })
      .then(response => {
        response.json().then(results => {
          dispatch(
            change(formName, input.name, `/media-objects/${results.id}`),
          );

          this.setState({
            mediaObject: new MediaObject(results),
            uploading: false,
          });
        });
      })
      .catch(() => {
        dispatch(change(formName, input.name, null));

        this.setState({ uploading: false, mediaObject: new MediaObject() });
        dispatch(
          createToastAction(
            new Toast({
              title: 'Oops',
              body:
                'Une erreur est survenue, merci de réessayer ultérieurement',
              variant: 'danger',
            }),
          ),
        );
      });
  };

  handleRemove = () => {
    this.setState({
      mediaObject: new MediaObject(),
      id: null,
    });
  };

  render() {
    const {
      props,
      state: { mediaObject, uploading },
    } = this;

    return (
      <MediaImageInput
        input={props.input}
        id={props.id}
        label={props.label}
        onChange={this.handleChange}
        onRemove={this.handleRemove}
        props={props}
        required={props.required}
        meta={props.meta}
        feedback={props.feedback}
        filePath={mediaObject.contentUrl}
        uploading={uploading}
      />
    );
  }
}

export default connect()(MediaImageInputContainer);
