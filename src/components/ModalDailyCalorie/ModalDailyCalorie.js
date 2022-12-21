import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalDailyCalorieStyled,
  ModalBackdropStyled,
  CloseIconStyled,
} from './ModalDailyCalorieStyled.styled';

const modalContainer = document.getElementById('modal-root');

export function ModalDailyCalorie({ closeModal, children, calculateData }) {
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

  // const { height, age, currentWeight, desiredWeight } = calculateData;

  // const countedCalories =
  //   10 * currentWeight +
  //   6.25 * height -
  //   5 * age -
  //   161 -
  //   10 * (currentWeight - desiredWeight);

  return createPortal(
    <ModalBackdropStyled onClick={onBackdropClickHandler}>
      <ModalDailyCalorieStyled>
        <CloseIconStyled onClick={() => closeModal()} />
        {children}
      </ModalDailyCalorieStyled>
    </ModalBackdropStyled>,
    modalContainer
  );
}
