import { configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './store/restaurants';

const store = configureStore({
  reducer: {
    restaurantsStore: restaurantsSlice.reducer
  }
});

export default store;
