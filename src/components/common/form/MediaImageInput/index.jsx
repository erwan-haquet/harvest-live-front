import React, { Fragment } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Label from '../Label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import styles from './styles.module.scss';
import Spinner from '../../Spinner';

const MediaImageInput = ({
  input,
  id,
  meta: { touched, error },
  label,
  required,
  onChange,
  onRemove,
  feedback,
  filePath,
  uploading,
}) => (
  <Form.Group>
    <Label label={label} required={required} />
    {uploading && (
      <div className={styles.spinnerWrapper}>
        <Spinner />
      </div>
    )}
    {!uploading && !filePath && (
      <InputGroup>
        <Form.Control
          type="text"
          id={id}
          name={id}
          value={input.value}
          isInvalid={error && touched}
          readOnly
          hidden
        />
        <Button className={styles.button} variant="secondary">
          <label className={styles.label} htmlFor="single">
            <FontAwesomeIcon icon={faCamera} size="5x" />
          </label>
          <input type="file" id="single" onChange={onChange} hidden accept="image/*" />
        </Button>
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        {feedback && <Form.Text className="text-muted">{feedback}</Form.Text>}
      </InputGroup>
    )}
    {!uploading && filePath && (
      <Fragment>
        <img src={filePath} className={styles.image} alt="uploaded_image" />
        <Button variant="link" onClick={onRemove} size="sm">
          <FontAwesomeIcon icon={faTimes} className={styles.removeIcon} />
          <span>Supprimer la photo</span>
        </Button>
      </Fragment>
    )}
  </Form.Group>
);

export default MediaImageInput;
