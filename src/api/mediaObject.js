import fetch from 'cross-fetch';
import MediaObject from '../models/mediaObject';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

/**
 *
 * @param iri
 * @returns {Promise<Record<{contentUrl: null, id: null}> & Readonly<{contentUrl: null, id: null}>>}
 */
export async function getOne(iri) {
  if (!iri) {
    return null;
  }

  const url = `${apiUrl}${iri}`;

  const response = await fetch(url, {
    headers: {
      accept: 'application/json',
    },
  });

  const body = await response.json();

  return new MediaObject(body);
}
