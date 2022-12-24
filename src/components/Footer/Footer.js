import { useState } from 'react';
import { FooterContainer, FooterData, FooterSpan } from './Footer.styled';
import FooterModalTeam from './FooterModalTeam/FooterModalTeam';
import FooterTeamBtn from './FooterTeamBtn';

export default function Footer({ handler, closeModal }) {
  const [open, setOpen] = useState(false);
  return (
    <FooterContainer>
      <FooterData>
        <FooterSpan>
          © 2022 | All Rights Reserved | Developed by
          <FooterTeamBtn
            handler={() => {
              setOpen(true);
            }}
          >
            GoIT Students
          </FooterTeamBtn>
          {open && (
            <FooterModalTeam
              closeModal={() => {
                setOpen(true);
              }}
            />
          )}
        </FooterSpan>
      </FooterData>
    </FooterContainer>
  );
}
