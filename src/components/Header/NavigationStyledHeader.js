import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import VerdanaBold from '../../fonts/VerdanaBold.ttf';

export const HeaderNavigationWrapper = styled.div`
  display: ${p =>
    p.location === '/login' || p.location === '/signup' || p.location === '/'
      ? 'flex'
      : 'none'};
  justify-content: center;
  gap: 14px;
  padding-top: 18px;
  padding-bottom: 9px;

  @media (min-width: 768px) {
    gap: 24px;
    padding-top: 17px;
    padding-bottom: 10px;
  }

  @media (min-width: 1280px) {
    display: ${p =>
      p.location === '/login' || p.location === '/signup' ? 'none' : 'flex'};
    gap: 18px;
    height: 32px;
    border-left: 2px solid #e0e0e0;
    padding-left: 20px;
    padding-top: 11px;
    padding-bottom: 4px;
    position: absolute;
    top: 121px;
    left: 187px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.secondary};
  font-family: ${VerdanaBold};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;

  &:hover {
    color: ${p => p.theme.colors.primary};
  }

  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;
