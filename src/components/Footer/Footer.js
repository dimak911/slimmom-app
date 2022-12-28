import { FooterContainer, FooterData, FooterSpan } from './Footer.styled';

import FooterTeamBtn from './FooterTeamBtn';

export default function Footer({ openModal }) {
  return (
    <FooterContainer>
      <FooterData>
        <FooterSpan>
          © 2022 | All Rights Reserved | Developed by
          <FooterTeamBtn openModal={openModal} />
        </FooterSpan>
      </FooterData>
    </FooterContainer>
  );
}
