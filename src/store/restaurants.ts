import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RestaurantAPI } from '../apis/restaurantAPI';

export const getRestaurants = createAsyncThunk(
  'restaurants/getAll',
  async (pagination: { page: number; pageSize: number }) => {
    const res = await RestaurantAPI.getAll(pagination);

    const restaurants = res.data.finalResult
      .filter((item: any) => item.type === 'VENDOR')
      .map((item: any) => item.data);

    return { restaurants, pagination };
  }
);

export const restaurantsSlice = createSlice({
  name: 'restaurants',

  initialState: {
    list: [] as any[],
    pageSize: 10,
    page: 1
  },

  reducers: {
    nextPage(state) {
      state.page++;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(getRestaurants.fulfilled, (state, action) => {
      const { page, pageSize } = action.payload.pagination;
      if (page < state.page) {
        return;
      }

      state.list.push(...action.payload.restaurants);
      state.page = page;
    });
  }
});

export const { nextPage } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
