import styled from 'styled-components';
import { ReactComponent as CloseIconCross } from '../../icons/close-cross.svg';

export const ModalBackdropStyled = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(33, 33, 33, 0.12);

  @media (max-width: 320px) {
    top: 80px;
  }
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
    width: 100%;
  }
  @media (max-width: 320px) {
    height: 100%;
    padding: 0;
    /* top: 370px; */
  }
`;

export const CloseIconCrossStyled = styled(CloseIconCross)`
  display: block;
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
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
