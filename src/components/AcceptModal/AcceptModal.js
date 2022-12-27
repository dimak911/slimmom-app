import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalDailyCalorieStyled,
  ModalBackdropStyled,
  CloseIconCrossStyled,
  CloseIconArrowStyled,
  CloseRectMobileStyled,
  AgreeButtonStyled,
  DesagreeButtonStyled,
  ButtonWrap,
  AcceptQuestionStyled,
} from './AcceptModal.styled';
import closeIconArrow from '../../images/icons/back-arrow.png';

const modalContainer = document.getElementById('modal-root');

export function AcceptModal({
  closeModal,
  acceptAction,
  agreeButton,
  desagreeButton,
  children,
}) {
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
        <CloseIconCrossStyled onClick={() => closeModal()} />
        <CloseRectMobileStyled onClick={() => closeModal()}>
          <CloseIconArrowStyled src={closeIconArrow} alt="back arrow" />
        </CloseRectMobileStyled>
        <AcceptQuestionStyled>
          Впевнені, що хочете {acceptAction}?
        </AcceptQuestionStyled>
        {children}
        <ButtonWrap>
          <AgreeButtonStyled type="button" onClick={() => agreeButton.action()}>
            {agreeButton.text}
          </AgreeButtonStyled>
          <DesagreeButtonStyled
            type="button"
            onClick={() => desagreeButton.action()}
          >
            {desagreeButton.text}
          </DesagreeButtonStyled>
        </ButtonWrap>
      </ModalDailyCalorieStyled>
    </ModalBackdropStyled>,
    modalContainer
  );
}
