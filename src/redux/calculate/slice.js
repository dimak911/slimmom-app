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
    countedCalories: null
  },
  extraReducers: builder => {
    builder
      .addCase(calculation.fulfilled, (state, action) => {
        state.formData = action.payload.data;
        state.countedCalories = action.payload.callorie;
      })
      .addCase(refreshCalories.fulfilled, (state, action) => {
        state.formData = action.payload.data;
        state.countedCalories = action.payload.callorie;
      });
  }
});

export const calculateReducer = calculateSlice.reducer;
