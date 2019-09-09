const API_ENDPOINT = 'http://localhost:3001/';

export const getApiUrl = () => API_ENDPOINT;

const getRequest = async (serviceEndpoint) => { // eslint-disable-line
  return fetch(`${getApiUrl()}/${serviceEndpoint}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => { // eslint-disable-line
      if (response.status === 200) {
        return response.json();
      }
    })
    .catch((error) => error);
};

const deleteRequest = async (serviceEndpoint) => { // eslint-disable-line
  return fetch(`${getApiUrl()}/${serviceEndpoint}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => { // eslint-disable-line
      if (response.status === 200) {
        return response.json();
      }
    })
    .catch((error) => error);
};

const postRequest = async (serviceEndpoint, data) => { // eslint-disable-line
  return fetch(`${getApiUrl()}/${serviceEndpoint}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(async (response) => { // eslint-disable-line
      if (response.status === 200) {
        return response.json();
      }
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};

const patchRequest = async (serviceEndpoint, data) => {// eslint-disable-line
  return fetch(`${getApiUrl()}/${serviceEndpoint}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(async (response) => { // eslint-disable-line
      if (response.status === 200) {
        return response.json();
      }
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};


export default {
  getRequest,
  deleteRequest,
  postRequest,
  patchRequest,
};
