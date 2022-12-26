import { FooterContainer, FooterData, FooterSpan } from './Footer.styled';

import FooterTeamBtn from './FooterTeamBtn';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterData>
        <FooterSpan>
          © 2022 | All Rights Reserved | Developed by
          <FooterTeamBtn />
        </FooterSpan>
      </FooterData>
    </FooterContainer>
  );
}
