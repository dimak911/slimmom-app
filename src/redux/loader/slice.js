import { createSlice } from '@reduxjs/toolkit';
import { showLoading } from './operations';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
  },
  extraReducers: builder => {
    builder.addCase(showLoading.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(showLoading.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(showLoading.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const loadingReducer = loadingSlice.reducer;
