import { createAction } from '@reduxjs/toolkit';

const findProductsSuccess = createAction('product/findProductsSuccess');
const findProductsFailure = createAction('product/findProductsFailure');

const clearProductList = createAction('product/clearProductList');

const productActions = {
	findProductsSuccess,
	findProductsFailure,

	clearProductList,
};

export default productActions;
