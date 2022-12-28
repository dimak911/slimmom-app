import styled from 'styled-components';
import { ReactComponent as BurgerIcon } from '../../images/icons/burger-icon.svg';
import { ReactComponent as CrossIcon } from '../../images/icons/close-cross.svg';

export const HeaderStyled = styled.section`
  min-width: 320px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-top: 20px;
  padding-bottom: 16px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin: 0 auto;
    padding-right: 32px;
    padding-left: 32px;
    width: 768px;
  }

  @media (min-width: 1280px) {
    padding-right: 16px;
    padding-left: 16px;
    width: 1280px;
    padding-top: 80px;
    padding-bottom: 0px;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 20px;
  }
`;

export const HeaderUnderline = styled.div`
  margin-left: auto;
  margin-right: auto;

  height: 2px;
  min-width: 320px;
  background-color: #e0e0e0;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const BurgerIconStyled = styled(BurgerIcon)`
  width: 18px;
  height: 12px;
  cursor: pointer;
  fill: ${props => props.theme.colors.black};
  margin-right: 6px;

  :hover,
  :focus {
    fill: ${props => props.theme.colors.accent};
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const CrossIconStyled = styled(CrossIcon)`
  height: 14px;
  margin-right: 6px;

  @media (min-width: 1280px) {
    display: none;
  }
`;
