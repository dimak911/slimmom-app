import { createSlice } from '@reduxjs/toolkit';
import { registration } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    error: null,
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder.addCase(registration, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
