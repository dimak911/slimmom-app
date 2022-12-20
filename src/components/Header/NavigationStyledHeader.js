import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import VerdanaBold from '../../fonts/VerdanaBold.ttf';

export const HeaderNavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media (min-width: 1280px) {
    gap: 18px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  /* text-align: center; */
  color: ${p => p.theme.colors.secondary};
  font-family: ${VerdanaBold};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;

  &:hover {
    color: ${p => p.theme.colors.primary};
  }
`;
