import { configureStore } from '@reduxjs/toolkit';
import toursReducer from './slices/toursSlice';

const store = configureStore({
  reducer: {
    toursData: toursReducer,
  },
});

export default store;
