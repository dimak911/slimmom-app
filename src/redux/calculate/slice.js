import { createSlice } from '@reduxjs/toolkit';
import { calculation, refreshCalories } from './operations';

export const calculateSlice = createSlice({
  name: 'calculate',
  initialState: {
    formData: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: '',
    },
    countedCalories: null,
    notAllowedFoodCategories: [],
  },
  reducers: {
    addCalories: (state, action) => {
      state.formData = action.payload.data;
      state.countedCalories = action.payload.calorie;
      state.notAllowedFoodCategories = action.payload.notRecommendedProduct;
    },
    removeCalories: (state, action) => {
      state.formData = {
        height: '',
        age: '',
        currentWeight: '',
        desiredWeight: '',
        bloodType: '',
      };
      state.countedCalories = null;
      state.notRecommendedProduct = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(calculation.fulfilled, (state, action) => {
        state.formData = action.payload.data;
        state.countedCalories = action.payload.calorie;
        state.notAllowedFoodCategories = action.payload.notRecommendedProduct;
      })
      .addCase(refreshCalories.fulfilled, (state, action) => {
        state.formData = action.payload.data;
        state.countedCalories = action.payload.calorie;
        state.notAllowedFoodCategories = action.payload.notRecommendedProduct;
      });
  },
});

export const { removeCalories, addCalories } = calculateSlice.actions;

export const calculateReducer = calculateSlice.reducer;
