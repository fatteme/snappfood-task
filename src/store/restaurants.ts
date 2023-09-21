import { createSlice } from '@reduxjs/toolkit';

export const restaurantsSlice = createSlice({
  name: 'restaurants',

  initialState: {
    list: [] as any[],
    pageSize: 10,
    page: 1
  },

  reducers: {
    onNextPage: (state) => {
      state.page++;
    },

    onChangePageSize: (state, action) => {
      state.pageSize = action.payload;
    },

    setRestaurants: (state, action) => {
      state.list = [...action.payload];
    }
  }
});

export const RestaurantsActions = restaurantsSlice.actions;
