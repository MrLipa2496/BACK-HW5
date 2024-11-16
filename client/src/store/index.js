import { configureStore } from '@reduxjs/toolkit';
import toursReducer from './slices/toursSlice';
import transportsReduser from './slices/transportsSlice';

const store = configureStore({
  reducer: {
    toursData: toursReducer,
    transportData: transportsReduser,
  },
});

export default store;
