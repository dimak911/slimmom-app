import { createSlice } from '@reduxjs/toolkit';
import { showLoading } from './operations';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
  },
  extraReducers: {
    [showLoading.pending]: (state) => {
      state.isLoading = true;
     },
    [showLoading.fulfilled]: (state) => {
      state.isLoading = false;
     },
    [showLoading.rejected]: (state) => {
      state.isLoading = false;
     },
  }
});

export const loadingReduser = loadingSlice.reducer;
