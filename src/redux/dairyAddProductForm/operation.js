import axios from 'axios';

import {
  searchProductRequest,
  searchProductSuccess,
  searchProductError,
  addProductRequest,
  addProductSuccess,
  addProductError,
} from './actions';

axios.defaults.baseURL = 'http://localhost:3001/api';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const searchProduct = query => {
  return axios
    .get(`/product?search=${query}`)
    .then(res => res.data)
    .catch(error => {
      throw new Error(error);
    });
};

const addEatenProduct = product => {
  return axios
    .post('/day', product)
    .then(res => res.data)
    .catch(error => {
      throw new Error(error);
    });
};

export const searchProductOperation = query => async (dispatch, getState) => {
  const accessToken = getState().LogInReducer.accessToken;
  setToken(accessToken);
  dispatch(searchProductRequest());
  try {
    const data = await searchProduct(query);
    dispatch(searchProductSuccess(data));
  } catch (error) {
    dispatch(searchProductError(error.message));
  }
};

export const addNewProductOperation = product => async (dispatch, getState) => {
  const accessToken = getState().LogInReducer.accessToken;
  setToken(accessToken);
  dispatch(addProductRequest());
  try {
    const data = await addEatenProduct(product);
    dispatch(addProductSuccess(data));
  } catch (error) {
    dispatch(addProductError(error.message));
  }
};

// export { searchProductOperation, addNewProductOperation };
