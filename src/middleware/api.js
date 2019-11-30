import Axios from 'axios';
import Config from '../config/config';

function __handleApiSuccess(res, resolve) {
  resolve(res.data);
}

function __handleApiError(err, reject) {
  reject(err);
}

function __callApi(method, endpoint, data) {
  const response = new Promise((resolve, reject) => {
    const host = Config.api.host;
    const url =`${host}${endpoint}`;
    const config = {
      method: method,
      url: url,
      data: {
        url: data
      }
    }
    Axios(config)
    .then(res => {
      __handleApiSuccess(res, resolve);
    })
    .catch(err => {
      __handleApiError(err, reject);
    })
  })
  return response;
}

export function sendUrlLink(url) {
  return __callApi('POST', '/scrap', url);
}
