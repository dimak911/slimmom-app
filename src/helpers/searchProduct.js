import axios from 'axios';

export const searchProductList = async productValue =>
  await axios.get(`products?productTitle=${productValue}`);
