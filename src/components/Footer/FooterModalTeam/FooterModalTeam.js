import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalTeamStyled,
  ModalBackdropStyled,
  CloseIconCrossStyled,
  CloseIconArrowStyled,
  CloseRectMobileStyled,
} from './FooterModalTeam.styled';
import closeIconArrow from '../../../images/icons/back-arrow.png';

const modalContainer = document.getElementById('modal-root');

export function FooterModalTeam({ closeModal, children }) {
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
      <ModalTeamStyled>
        <CloseIconCrossStyled onClick={() => closeModal()} />
        <CloseRectMobileStyled onClick={() => closeModal()}>
          <CloseIconArrowStyled src={closeIconArrow} alt="back arrow" />
        </CloseRectMobileStyled>
        {children}
      </ModalTeamStyled>
    </ModalBackdropStyled>,
    modalContainer
  );
}
