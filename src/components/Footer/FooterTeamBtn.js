import React from 'react';
import { BtnTeam, BtnTeamTitle } from './Footer.styled';

export default function FooterTeamBtn({ closeModal }) {
  return (
    <BtnTeam type="button" onClick={() => closeModal()}>
      <BtnTeamTitle>GoIT Students</BtnTeamTitle>
    </BtnTeam>
  );
}
