import { createSlice } from '@reduxjs/toolkit';

export const calculateSlice = createSlice({
  name: 'calculate',
  initialState: null,
  reducers: {
    calculateValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { calculateValue } = calculateSlice.actions;
