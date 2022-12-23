import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from 'redux/products/slice';

import {
  ProductName,
  ProductWeight,
  ProductKcal,
  SuffixKcal,
  RemoveButton,
  Cross,
} from './DiaryProducListItem.styled';

export const DiaryProductListItem = ({
  id,
  productName,
  productWeight,
  productCalories,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <ProductName>{productName}</ProductName>
      <ProductWeight>{productWeight} г</ProductWeight>
      <ProductKcal>
        {productCalories} <SuffixKcal>ккал</SuffixKcal>
      </ProductKcal>
      <RemoveButton
        type="button"
        onClick={() => {
          // console.log('TODO: remove item --> ', id);
          // console.log(DuseDispatch.dispatch(getList(id)));
          dispatch(removeItem(id));
        }}
      >
        <Cross />
      </RemoveButton>
    </>
  );
};
