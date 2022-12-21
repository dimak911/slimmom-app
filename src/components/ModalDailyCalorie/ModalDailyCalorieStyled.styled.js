import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../icons/close-cross.svg';

export const ModalBackdropStyled = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(33, 33, 33, 0.12);
`;

export const ModalDailyCalorieStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 672px;
  height: 574px;
  margin: 0 auto 0;
  padding: ${props => props.theme.space[6]}px 0 0 0;
  background-color: ${props => props.theme.colors.white};

  @media (max-width: 672px) {
    width: 100vw;
  }
`;

export const CloseIconStyled = styled(CloseIcon)`
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
  fill: ${props => props.theme.colors.black};
  :hover,
  :focus {
    fill: ${props => props.theme.colors.accent};
  }
`;
