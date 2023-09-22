import { api } from './axios';

import { Restaurant } from '../types/resturant';

export const RestaurantAPI = {
  getAll: async function (params?: getRestaurantsPayload) {
    const response = await api.request<getRestaurantsResponse>({
      url: `/restaurant/vendors-list`,
      method: 'GET',
      params: { ...params, lat: 35.774, long: 51.418 }
    });

    return response.data;
  }
};

export interface getRestaurantsPayload {
  page?: number;
  pageSize?: number;
}

interface getRestaurantsResponse {
  data: {
    finalResult: {
      data: Restaurant;
      type: 'VENDOR' | 'TEXT';
    }[];
  };
}
