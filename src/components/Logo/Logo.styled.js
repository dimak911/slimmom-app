import styled from 'styled-components';

export const LogoContainer = styled.img`
  display: flex;
  align-items: center;

  @media screen and (min-width: 1280px) {
    .logoContainer {
      display: flex;
      align-items: flex-end;
    }
  }
`;

export const LogoIcon = styled.img`
  width: 44px;
  height: 44px;
  @media (min-width: 768px) {
    width: 162px;
    height: 44px;
  }
  @media (min-width: 1200px) {
    width: 167px;
    height: 44px;
  }
`;

export const LogoText = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    .logoText {
        display: block;
        margin-left: 10px;
        
    }

    @media screen and (min-width: 1280px) {
    .logoText {
        margin-left: -10px;
    }
`;
