import axios, { AxiosError } from 'axios';

import { transformToSnakeCase } from '../utils/object';

export const api = axios.create({
  baseURL: 'https://snappfood.ir/mobile/v3'
});

api.interceptors.request.use((config) => {
  if (config.params) {
    config.params = transformToSnakeCase(config.params);
  }

  return config;
});

api.interceptors.response.use(undefined, (error: AxiosError) => {
  const statusCode = error.response?.status;

  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
});
