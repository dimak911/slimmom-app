import { createSlice } from '@reduxjs/toolkit';
import {
  registration,
  login,
  logOut,
  refreshUser,
  addData,
} from './operations';

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

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    error: null,
    isLoggedIn: false,
    isRefreshing: false,
    data: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: '',
    },
    calorie: null,
    notRecommendedProduct: [],
    render: false,
  },
  reducers: {
    addUserFormdata(state, action) {
      state.data = action.payload.data;
      state.calorie = action.payload.calorie;
      state.notRecommendedProduct = action.payload.notRecommendedProduct;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.data = action.payload.data;
        state.calorie = action.payload.calorie;
        state.notRecommendedProduct = action.payload.notRecommendedProduct;
        state.render = action.payload.render;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(addData.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.calorie = action.payload.calorie;
        state.notRecommendedProduct = action.payload.notRecommendedProduct;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { addUserFormdata } = authSlice.actions;
