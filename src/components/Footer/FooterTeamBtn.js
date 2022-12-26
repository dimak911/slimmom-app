import React from 'react';
import { BtnTeam, BtnTeamTitle } from './Footer.styled';

export default function FooterTeamBtn({ openModal }) {
  console.log(openModal);
  return (
    <BtnTeam type="button" onClick={() => openModal()}>
      <BtnTeamTitle>GoIT Students</BtnTeamTitle>
    </BtnTeam>
  );
}
