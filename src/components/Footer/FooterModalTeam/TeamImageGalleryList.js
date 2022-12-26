import TeamImageGalleryCard from './TeamImageGalleryCard';
import { TeamWrapper } from './FooterModalTeam.styled';
import { createPortal } from 'react-dom';
import {
  CloseIconCrossStyled,
  ModalBackdropStyled,
} from 'components/ModalDailyCalorie/ModalDailyCalorieStyled.styled';

import { useEffect } from 'react';
const modalContainer = document.getElementById('modal-root');

export default function FooterModalTeamList({ users, closeModal }) {
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
      <TeamWrapper>
        <CloseIconCrossStyled onClick={() => closeModal()} />
        {users.map(({ id, avatar, username, role, linkedin, github }) => (
          <TeamImageGalleryCard
            key={id}
            avatar={avatar}
            username={username}
            role={role}
            linkedin={linkedin}
            github={github}
          ></TeamImageGalleryCard>
        ))}
      </TeamWrapper>
    </ModalBackdropStyled>,
    modalContainer
  );
}
