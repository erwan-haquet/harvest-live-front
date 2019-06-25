import { Record } from 'immutable';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

export const MediaObject = Record({
  id: null,
  contentUrl: null,
});

MediaObject.prototype.getFilePath = function(mediaObject) {
  if (!mediaObject.contentUrl) {
    return null;
  }

  return `${apiUrl}${mediaObject.contentUrl}`;
};

export default MediaObject;
