import { createSlice } from '@reduxjs/toolkit';

import { addDiaryListItem, fetchsideBarInfo } from './operations';
import { fetchDiaryProducts } from './operations';
import { removeDiaryListItem } from './operations';

export const productListSlice = createSlice({
  name: 'productList',
  sideBarInfo: [],
  initialState: {
    productsDiary: [
      {
        id: '63a6f7e4365affd6a44aa0b6',
        owner: '63a5e4a69414cd40a2f95880',
        prodName: 'Eggplant',
        prodWeight: '100',
        prodKcal: '320',
        date: '24-12-2022',
      },
      {
        id: '2',
        owner: '2',
        prodName: 'Bread',
        prodWeight: '100',
        prodKcal: '210',
        date: '2',
      },
      {
        id: '3',
        owner: '2',
        prodName: 'Bread',
        prodWeight: '100',
        prodKcal: '210',
        date: '2',
      },
      {
        id: '4',
        owner: '2',
        prodName: 'Bread',
        prodWeight: '100',
        prodKcal: '210',
        date: '2',
      },
      {
        id: '5',
        owner: '2',
        prodName: 'Bread',
        prodWeight: '100',
        prodKcal: '210',
        date: '2',
      },
    ],
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
      state.productsDiary = [];
    });
    builder.addCase(fetchsideBarInfo, (state, action) => {
      state.sideBarInfo = action.payload.result;
    });
    builder.addCase(removeDiaryListItem.fulfilled, (state, action) => {
      console.log('delete-action:', action.payload);
      const idx = state.productsDiary.findIndex(product => {
        console.log('state', state);
        return product.id === action.payload.id;
      });
      console.log(idx);

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
