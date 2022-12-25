import React from 'react';
import { useDispatch } from 'react-redux';
import { removeDiaryListItem } from 'redux/products/operations';

import {
  ProductName,
  ProductWeight,
  ProductKcal,
  SuffixKcal,
  RemoveButton,
  Cross,
} from './DiaryProducListItem.styled';

export const DiaryProductListItem = ({
  _id,
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
        id={_id}
        onClick={event => {
          // console.log('TODO: remove item --> ', id);
          // console.log(DuseDispatch.dispatch(getList(id)));
          dispatch(removeDiaryListItem(event.currentTarget.id));
          console.log(event.currentTarget.id);
        }}
      >
        <Cross />
      </RemoveButton>
    </>
  );
};
