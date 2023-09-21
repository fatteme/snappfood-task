import { api } from './axios';

export const RestaurantAPI = {
  getAll: async function (pagination?: { pageSize: Number; pageNumber: Number }) {
    const response = await api.request({
      url: `/restaurant/vendors-list`,
      method: 'GET',
      params: { ...pagination, lat: 35.754, long: 51.328 }
    });

    return response.data;
  }
};
