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
  padding: 74px 20px 40px 20px;

  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    max-height: 250px;
    border-radius: 20px;
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

export const AcceptQuestionStyled = styled.h2`
  margin-bottom: ${p => p.theme.spaceForm[2]}px;

  font-family: Verdana;
  font-size: ${p => p.theme.fontSizes.xs};
  text-transform: uppercase;
  text-align: center;

  color: ${p => p.theme.colors.accent};
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const DesagreeButtonStyled = styled.button`
  width: 182px;
  padding: ${p => p.theme.spaceForm[0]}px;

  border-radius: ${p => p.theme.radii.button};
  border: 2px solid ${p => p.theme.colors.accent};

  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  cursor: pointer;

  transition: box-shadow 300ms ease-in, transform 200ms ease-in;

  :hover,
  :focus {
    box-shadow: 0px 15px 20px rgba(252, 132, 45, 0.4);
    transform: translateY(-7px);
  }
`;

export const AgreeButtonStyled = styled.button`
  display: block;
  width: 182px;
  padding: ${p => p.theme.spaceForm[0]}px;
  margin-bottom: ${p => p.theme.spaceForm[1]}px;

  text-decoration: none;
  text-align: center;

  border-radius: ${p => p.theme.radii.button};
  border: 2px solid ${p => p.theme.colors.accent};

  color: ${p => p.theme.colors.accent};
  cursor: pointer;
  transition: box-shadow 300ms ease-in, transform 200ms ease-in;

  :hover,
  :focus {
    box-shadow: 0px 15px 20px rgba(252, 132, 45, 0.4);
    transform: translateY(-7px);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: ${p => p.theme.space[0]}px;
    margin-right: ${p => p.theme.space[5]}px;
  }
`;
