import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-shrink: 0;
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
  font-size: 16px;
  font-weight: 500;
  color: #151a17;
  @media screen and (min-width: 1280px) {
    font-size: 25px;
  }
`;

export const BtnTeam = styled.button`
  z-index: 300;
  width: 90px;
  height: 66px;
  border-radius: 50%;

  background-color: transparent;

  transform: scale(1.1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
