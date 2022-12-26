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
    notAllowedFoodCategories: []
  },
  reducers: {
    addCalories: (state, action) => {
      state.formData = action.payload.data;
      state.countedCalories = action.payload.callorie;
      state.notRecommendedProduct = action.payload.notAllowedFoodCategories;
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
        state.countedCalories = action.payload.callorie;
        state.notRecommendedProduct = action.payload.notAllowedFoodCategories;
      })
      .addCase(refreshCalories.fulfilled, (state, action) => {
        state.formData = action.payload.data;
        state.countedCalories = action.payload.callorie;
        state.notRecommendedProduct = action.payload.notAllowedFoodCategories;
      });
  }
});

export const { removeCalories, addCalories } = calculateSlice.actions;

export const calculateReducer = calculateSlice.reducer;
