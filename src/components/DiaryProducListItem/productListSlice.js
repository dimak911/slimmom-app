import { createSlice } from '@reduxjs/toolkit';

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    productsDiary: [
      {
        id: 1,
        prodName: 'Eggplant',
        prodWeight: 100,
        prodKcal: 320,
      },
      {
        id: 2,
        prodName: 'Bread',
        prodWeight: 100,
        prodKcal: 210,
      },
    ],
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

    removeItem: (state, action) => {
      const idx = state.productsDiary.findIndex(
        product => product.id !== action.payload
      );
      state.productsDiary.splice(idx, 1);
    },
    getList: state => {
      return state;
    },
  },
});

export const { removeItem, getList } = productListSlice.actions;

export const productListReducer = productListSlice.reducer;
