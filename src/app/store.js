import { configureStore } from '@reduxjs/toolkit';
import { productListReducer } from '../components/DiaryProducListItem/productListSlice';

export const store = configureStore({
  reducer: {
    // put reducer here
    productList: productListReducer,
  },
});
