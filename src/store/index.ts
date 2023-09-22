import { configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './restaurants';

const store = configureStore({
  reducer: {
    restaurantsStore: restaurantsSlice.reducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
