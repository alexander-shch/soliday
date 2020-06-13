import axios, { AxiosRequestConfig } from 'axios';
import storage, { StorageField } from './storage';

const defaultApiPath = 'http://localhost:3005';

function getToken() {
  return storage.get(StorageField.TOKEN);
}

function getHeaders() {
  const token = getToken();
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
}

function Http<T>(config: AxiosRequestConfig) {
  return axios
    .request<T>({
      ...config,
      url: `${defaultApiPath}/${config.url}`,
      headers: getHeaders(),
    })
    .then(({ data }) => data);
}

export default Http;
