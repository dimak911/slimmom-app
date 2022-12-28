import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeDiaryListItem } from 'redux/products/operations';
import { AcceptModal } from 'components/AcceptModal';

import {
  ProductName,
  ProductWeight,
  ProductKcal,
  SuffixKcal,
  RemoveButton,
  Cross,
  DiaryProductListItemStyled,
} from './DiaryProducListItem.styled';

export const DiaryProductListItem = ({
  _id,
  productName,
  productWeight,
  productCalories,
}) => {
  const dispatch = useDispatch();

  const [isAcceptModalOpen, setIsAcceptModalopen] = useState(false);

  const openAcceptModal = () => {
    setIsAcceptModalopen(true);
    window.document.body.style.overflow = 'hidden';
  };

  const closeAcceptModal = () => {
    setIsAcceptModalopen(false);
    window.document.body.style.overflow = 'unset';
  };

  const deleteAction = () => {
    setIsAcceptModalopen(false);
    window.document.body.style.overflow = 'unset';
    dispatch(removeDiaryListItem(_id));
  };

  return (
    <DiaryProductListItemStyled>
      <ProductName>{productName}</ProductName>
      <ProductWeight>{productWeight} г</ProductWeight>
      <ProductKcal>
        {productCalories} <SuffixKcal>ккал</SuffixKcal>
      </ProductKcal>
      <RemoveButton type="button" onClick={() => openAcceptModal()}>
        <Cross />
      </RemoveButton>
      <>
        {isAcceptModalOpen && (
          <AcceptModal
            closeModal={closeAcceptModal}
            acceptAction={`видалити ${productName}`}
            agreeButton={{
              text: 'Видалити',
              action: deleteAction,
            }}
            desagreeButton={{
              text: 'Залишити',
              action: closeAcceptModal,
            }}
          ></AcceptModal>
        )}
      </>
    </DiaryProductListItemStyled>
  );
};
