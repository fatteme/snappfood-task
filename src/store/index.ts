import { configureStore } from '@reduxjs/toolkit';

import { restaurantsSlice } from './restaurants';

const store = configureStore({
  reducer: {
    restaurantsStore: restaurantsSlice.reducer
  }
});

export default store;

export type StoreState = ReturnType<typeof store.getState>;
