import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.div`
  display: ${p => (p.burgerActive ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  background-color: #264061;
  width: 100%;
  height: 100%;
  padding-top: 60px;

  @media (min-width: 767px) {
    padding-top: 100px;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  height: 112px;
  @media (min-width: 767px) {
    width: 336px;
  }
  @media (min-width: 1200px) {
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  color: ${P => P.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  letter-spacing: 0.04em;
  &:not(:last-child) {
    margin-bottom: 28px;
  }
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
  &.active {
    color: ${p => p.theme.colors.white};
  }
  @media (min-width: 767px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
