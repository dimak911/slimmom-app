import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.14;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin: 0;
    font-size: 18px;
    line-height: 1.187;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const FooterData = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  text-align: center;
`;

export const FooterSpan = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #151a17;
  @media screen and (min-width: 1280px) {
    font-size: 14px;
  }
`;

export const BtnTeam = styled.button`
  margin-left: 20px;
  border: none;

  background-color: transparent;

  transform: scale(1.1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(0.9);
    color: ${props => props.theme.colors.accent};
  }
`;

export const BtnTeamTitle = styled.span`
  display: block;
  margin: auto;
  padding: 13px 0;
  width: 160px;
  height: 17px;
  font-weight: 700;
  font-size: 14px;
  line-height: ${props => props.theme.lineHeights.heading};
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  @media screen and (min-width: 1280px) {
    font-size: 14px;
  }
`;
