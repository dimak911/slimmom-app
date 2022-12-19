import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ButtonFilling } from '../ButtonFilled/ButtonFilled';
import {
  ModalDailyCalorieStyled,
  ModalsHeadStyled,
  FoodListTitleStyled,
  CaloriesCountStyled,
  LineStyled,
  FoodListWrapperStyled,
  FoodListStyled,
  ModalBackdropStyled,
  CloseIconStyled,
} from './ModalDailyCalorieStyled.styled';

const modalContainer = document.getElementById('modal-root');

export function ModalDailyCalorie({ closeModal }) {
  useEffect(() => {
    const keydownHandler = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', keydownHandler);

    return () => window.removeEventListener('keydown', keydownHandler);
  });

  const onBackdropClickHandler = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <ModalBackdropStyled onClick={onBackdropClickHandler}>
      <ModalDailyCalorieStyled>
        <CloseIconStyled onClick={() => closeModal()} />
        <ModalsHeadStyled>
          Your recommended daily
          <br /> calorie intake is
        </ModalsHeadStyled>
        <CaloriesCountStyled>2800 ккал</CaloriesCountStyled>
        <FoodListWrapperStyled>
          <LineStyled />
          <FoodListTitleStyled>Foods you should not eat</FoodListTitleStyled>
          <FoodListStyled>
            <li>1. Flour products</li>
            <li>2. Milk</li>
            <li>3. Red meat</li>
            <li>4. Smoked meats</li>
          </FoodListStyled>
        </FoodListWrapperStyled>
        <ButtonFilling>Start losing weight</ButtonFilling>
      </ModalDailyCalorieStyled>
    </ModalBackdropStyled>,
    modalContainer
  );
}
