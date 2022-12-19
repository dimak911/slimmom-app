import { createAction } from '@reduxjs/toolkit';

const searchProductRequest = createAction('@user/searchProductRequest');
const searchProductSuccess = createAction('@user/searchProductSuccess');
const searchProductError = createAction('@user/searchProductError');

const addProductRequest = createAction('@user/addProductRequest');
const addProductSuccess = createAction('@user/addProductSuccess');
const addProductError = createAction('@user/addProductError');

export {
  searchProductRequest,
  searchProductSuccess,
  searchProductError,
  addProductRequest,
  addProductSuccess,
  addProductError,
};
