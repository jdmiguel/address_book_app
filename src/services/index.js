import axios from 'axios';

const handleError = ({ response }) => {
  const error = {
    code: response && response.status,
    message: response && response.data ? response.data.message : null,
  };
  throw error;
};
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const normalizeResponse = (response) => response.data;

const request = (url, options) =>
  axios({
    url,
    ...options,
  })
    .then(checkStatus)
    .then(normalizeResponse)
    .catch(handleError);

export default request;
