import { api } from './axios';

export const RestaurantAPI = {
  getAll: async function (params?: { page?: Number; pageSize?: Number }) {
    const response = await api.request({
      url: `/restaurant/vendors-list`,
      method: 'GET',
      params: { ...params, lat: 35.774, long: 51.418 }
    });

    return response.data;
  }
};
