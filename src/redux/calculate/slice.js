import { createSlice } from '@reduxjs/toolkit';

export const calculateSlice = createSlice({
  name: 'calculate',
  initialState: {
    formData: {
      height: null,
      age: null,
      currentWeight: null,
      desiredWeight: null,
      bloodType: null,
    },
    countedCalories: null
  },
  reducers: {
    calculateValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { calculateValue } = calculateSlice.actions;
