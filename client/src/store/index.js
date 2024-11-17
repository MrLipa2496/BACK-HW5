import { configureStore } from '@reduxjs/toolkit';
import toursReducer from './slices/toursSlice';
import transportsReduser from './slices/transportsSlice';
import hotelsReduser from './slices/hotelsSlice';

const store = configureStore({
  reducer: {
    toursData: toursReducer,
    transportData: transportsReduser,
    hotelsData: hotelsReduser,
  },
});

export default store;
