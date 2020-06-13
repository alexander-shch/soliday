import axios, { AxiosRequestConfig } from 'axios';

const defaultApiPath = 'http://localhost:3005';

function getToken() {
  return localStorage.getItem('token');
}

function getHeaders() {
  const headers = new Headers();
  const token = getToken();
  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }
  headers.append('Content-Type', 'application/json');

  return headers;
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
