import { createSlice } from '@reduxjs/toolkit';
import { calculation, refreshCalories } from './operations';

export const initialState = {
  data: {
    height: '',
    age: '',
    currentWeight: '',
    desiredWeight: '',
    bloodType: '',
  },
  countedCalories: null,
  notRecommendedProduct: [],
};

export const calculateSlice = createSlice({
  name: 'calculate',
  initialState,
  reducers: {
    calculateValue(state, action) {
      return (state = action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(calculation.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.countedCalories = action.payload.callorie;
        state.notRecommendedProduct = action.payload.notRecommendedProduct;
      })
      .addCase(refreshCalories.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.countedCalories = action.payload.callorie;
        state.notRecommendedProduct = action.payload.notRecommendedProduct;
      });
  },
});

export const calculateReducer = calculateSlice.reducer;
export const { calculateValue } = calculateSlice.actions;
