import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalDailyCalorieStyled,
  ModalBackdropStyled,
  CloseIconStyled,
} from './ModalDailyCalorieStyled.styled';

const modalContainer = document.getElementById('modal-root');

export function ModalDailyCalorie({ closeModal, children }) {
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
        {children}
      </ModalDailyCalorieStyled>
    </ModalBackdropStyled>,
    modalContainer
  );
}
