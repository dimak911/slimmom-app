import { createSlice } from '@reduxjs/toolkit';

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    productsDiary: [
      {
        id: '1',
        owner: '1',
        prodName: 'Eggplant',
        prodWeight: '100',
        prodKcal: '320',
        date: '1',
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
    removeItem: (state, { payload }) => {
      const idx = state.productsDiary.findIndex(
        product => product.id === payload
      );
      state.productsDiary.splice(idx, 1);
    },
    getList: state => {
      return state;
    },
  },
});

export const { removeItem, getList } = productListSlice.actions;
