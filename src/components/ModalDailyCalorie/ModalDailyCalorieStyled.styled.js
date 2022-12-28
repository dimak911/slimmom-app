import styled from 'styled-components';
import { ReactComponent as CloseIconCross } from '../../images/icons/close-cross.svg';

export const ModalBackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 33, 33, 0.12);
  z-index: 1200;
`;

export const ModalDailyCalorieStyled = styled.div`
  background-color: ${props => props.theme.colors.white};
  height: 100%;
  width: 100%;
  margin: 0 auto 0;
  z-index: 999;
  padding: ${props => props.theme.space[6]}px 0 0 0;
  overflow-y: scroll;

  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 672px;
    height: 574px;
  }
`;

export const CloseIconCrossStyled = styled(CloseIconCross)`
  display: block;
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
  transition: fill 200ms ease-in;

  fill: ${props => props.theme.colors.black};
  :hover,
  :focus {
    fill: ${props => props.theme.colors.accent};
  }

  @media (max-width: 320px) {
    display: none;
  }
`;

export const CloseRectMobileStyled = styled.div`
  display: none;
  height: 40px;
  padding: 16px 20px;
  background-color: #eff1f3;

  @media (max-width: 320px) {
    display: block;
    margin-bottom: 40px;
  }
`;

export const CloseIconArrowStyled = styled.img`
  display: none;
  cursor: pointer;

  @media (max-width: 320px) {
    display: block;
  }
`;
