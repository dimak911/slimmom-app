import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from './actions';
//
import {
  DiaryProductListItemStyled,
  ProductName,
  ProductWeight,
  ProductKcal,
  RemoveButton,
  Cross,
} from './DiaryProducListItem.styled';

export const DiaryProductListItem = ({ item }) => {
  const dispatch = useDispatch();

  const { id, prodName, prodWeight, prodKcal } = item;

  return (
    <DiaryProductListItemStyled>
      <ProductName>{prodName}</ProductName>
      <ProductWeight>{prodWeight} g</ProductWeight>
      <ProductKcal>{prodKcal} kcal</ProductKcal>
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
    </DiaryProductListItemStyled>
  );
};
