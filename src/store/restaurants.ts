import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { StoreState } from '../store';

import { RestaurantAPI, getRestaurantsPayload } from '../apis/restaurantAPI';

import { Restaurant } from '../types/resturant';

export const getRestaurants = createAsyncThunk(
  'restaurants/getAll',
  async (params: getRestaurantsPayload) => {
    const res = await RestaurantAPI.getAll(params);

    const restaurants = res.data.finalResult
      .filter((item) => item.type === 'VENDOR')
      .map((item) => item.data);

    return { restaurants, params };
  }
);

interface RestaurantState {
  list: Restaurant[];
  pageSize: number;
  page: number;
}

const initialState: RestaurantState = {
  list: [],
  pageSize: 10,
  page: 1
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',

  initialState,

  reducers: {
    nextPage(state) {
      state.page++;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(getRestaurants.fulfilled, (state, action) => {
      const { page } = action.payload.params;
      if (!page || page < state.page) {
        return;
      }

      state.list.push(...action.payload.restaurants);
      state.page = page;
    });
  }
});

export const { nextPage } = restaurantsSlice.actions;

export const selectPage = (state: StoreState) => state.restaurantsStore.page;
export const selectPageSize = (state: StoreState) => state.restaurantsStore.pageSize;
export const selectRestaurants = (state: StoreState) => state.restaurantsStore.list;

export default restaurantsSlice.reducer;
