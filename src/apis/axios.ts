import axios, { AxiosError } from 'axios';

export const api = axios.create({
  baseURL: 'https://snappfood.ir/mobile/v3'
});

const errorHandler = (error: AxiosError) => {
  const statusCode = error.response?.status;

  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

api.interceptors.response.use(undefined, (error: AxiosError) => {
  return errorHandler(error);
});
