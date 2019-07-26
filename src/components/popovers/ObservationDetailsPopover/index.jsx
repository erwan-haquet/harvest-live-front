import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';
import Moment from 'react-moment';
import StarRatings from 'react-star-ratings';
import cx from 'classnames';

import styles from './styles.module.scss';

const ObservationDetailsPopoverModal = ({
  observation,
  culture,
  type,
  onClose,
  cultivationMethod,
  image,
}) => (
  <div className={styles.wrapper}>
    <h5 className={cx(styles.header, styles[type])}>
      <span className={styles.closeButton} onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </span>
      {culture}
      <span className={styles.small}>
        {' '}
        ({observation.variety}) -{' '}
        <Moment format="DD/MM/YYYY">{observation.createdAt}</Moment>
      </span>
    </h5>
    <div className={styles.tableWrapper}>
      <Table striped bordered hover className={styles.table}>
        <tbody>
          <tr>
            <td width="175px">
              <b>Lieu de récolte:</b>
            </td>
            <td>{observation.place}</td>
          </tr>
          <tr>
            <td>
              <b>Pratique culturale:</b>
            </td>
            <td>{cultivationMethod}</td>
          </tr>
          <tr>
            <td>
              <b>Rendement:</b>
            </td>
            <td>{observation.yield} q</td>
          </tr>
          <tr>
            <td>
              <b>Note de rendement:</b>
            </td>
            <td>
              <StarRatings
                rating={observation.yieldNotation}
                starRatedColor="#F37F2B"
                starDimension="17px"
                starSpacing="3px"
              />
            </td>
          </tr>
          {observation.specificWeight && (
            <tr>
              <td>
                <b>Poid spécifique:</b>
              </td>
              <td>{observation.specificWeight} kg/hl</td>
            </tr>
          )}
          {observation.protein && (
            <tr>
              <td>
                <b>Protéine:</b>
              </td>
              <td>{observation.protein} %</td>
            </tr>
          )}
          {observation.fallingNumber && (
            <tr>
              <td>
                <b>Temps de chute:</b>
              </td>
              <td>{observation.fallingNumber} s</td>
            </tr>
          )}
          <tr>
            <td>
              <b>Humidité:</b>
            </td>
            <td>{observation.humidity} %</td>
          </tr>
          <tr>
            <td>
              <b>Quantité d'azote utilisée:</b>
            </td>
            <td>{observation.nitrogenQuantityUsed} unités</td>
          </tr>
          <tr>
            <td>
              <b>Type d'azote utilisée:</b>
            </td>
            <td>{observation.nitrogenProductUsed}</td>
          </tr>

          <tr>
            <td>
              <b>Commentaire:</b>
            </td>
            <td>{observation.comment}</td>
          </tr>
          {image && (
            <tr>
              <td>
                <b>Photo:</b>
              </td>
              <td>
                <a target="_blank" rel="noopener noreferrer" href={image.contentUrl}>
                  <img
                    className={styles.image}
                    src={image.contentUrl}
                    alt="observation"
                  />
                </a>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  </div>
);

export default ObservationDetailsPopoverModal;
