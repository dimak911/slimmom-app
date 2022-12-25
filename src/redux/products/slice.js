import { createSlice } from '@reduxjs/toolkit';

import { addDiaryListItem, fetchsideBarInfo } from './operations';
import { fetchDiaryProducts } from './operations';
import { removeDiaryListItem } from './operations';

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    productsDiary: [],
    sideBarInfo: [],
  },
  reducers: {
    getList: state => {
      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchDiaryProducts.fulfilled, (state, action) => {
      state.productsDiary = action.payload;
    });
    builder.addCase(fetchDiaryProducts.rejected, (state, action) => {
      // state.productsDiary = [];
    });
    builder.addCase(fetchsideBarInfo.fulfilled, (state, action) => {
      state.sideBarInfo = action.payload;
    });
    builder.addCase(removeDiaryListItem.fulfilled, (state, action) => {
      const idx = state.productsDiary.findIndex(product => {
        return product._id === action.payload.id;
      });

      state.productsDiary.splice(idx, 1);
    });
    builder.addCase(removeDiaryListItem.rejected, (state, action) => {
      return state;
    });
    builder.addCase(addDiaryListItem.fulfilled, (state, action) => {
      state.productsDiary.push(action.payload);
    });
  },
});

export const { removeItem, getList } = productListSlice.actions;
