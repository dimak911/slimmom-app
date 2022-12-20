import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding-left: 16px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  color: ${P => P.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  margin-top: 131px;
  position: relative;
  &:not(:last-child) {
    margin-right: 18px;
    margin-left: 20px;
  }
  &:hover {
    color: ${p => p.theme.colors.secondary};
  }
  &:not(:last-child)::before {
    content: '';
    display: inline-block;
    width: 2px;
    height: 32px;
    background: ${p => p.theme.colors.input};
    position: absolute;
    vertical-align: middle;
    left: -20px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

export const Logo = styled.div`
  width: 167px;
  height: 66px;
  background-color: tomato;
  margin-top: 80px;
  margin-right: 20px;
`;
