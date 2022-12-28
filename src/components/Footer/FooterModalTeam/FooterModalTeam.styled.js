import styled from 'styled-components';
import { TfiLinkedin } from 'react-icons/tfi';
import { BsGithub } from 'react-icons/bs';
import { ReactComponent as CloseIconCross } from '../../../images/icons/close-cross.svg';

export const TeamWrapper = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;

  padding: 20px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  margin-left: auto;
  margin-right: auto;
`;

export const InfoProfile = styled.div`
  border-radius: 10px;
  padding-bottom: 15px;
  overflow: hidden;
  transition: box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

export const Avatar = styled.img`
  object-fit: cover;
  width: 200px;
  height: 200px;
  border-radius: 35px;
  overflow: hidden;
  padding-top: 10px;
`;

export const Username = styled.p`
  font-size: 13px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    margin: 0px auto;
    padding: 16px 0px;
    font-size: 14px;
    /* width: 150px; */
  }
`;

export const Role = styled.p`
  padding-bottom: 10px;
  font-weight: 700;
  font-size: 14px;
  color: #ff6b08;
`;

export const TextContent = styled.div`
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`;

export const Social = styled.ul`
  display: flex;
  justify-content: center;
`;

export const SocialIcon = styled.ul`
  :not(:last-child) {
    margin-right: 50px;
  }
`;

export const FooterGithub = styled(BsGithub)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #000;
  transform: scale(0.9);
  transition: all 250ms linear;
  &:hover {
    transform: scale(1.3);
    box-shadow: 0 0 13px 3px #0001;
  }
`;

export const FooterIconLn = styled(TfiLinkedin)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #000;
  transform: scale(0.9);
  transition: all 250ms linear;
  &:hover {
    transform: scale(1.3);
    box-shadow: 0 0 13px 3px #0001;
  }
`;

export const ModalBackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 33, 33, 0.12);
  z-index: 1000;
`;

export const ModalTeamStyled = styled.div`
  background-color: ${props => props.theme.colors.white};
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  z-index: 1000;
  position: absolute;
  border-radius: 15px;
  padding: ${props => props.theme.space[5]}px 0 0 0;
  overflow: scroll;

  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }
`;

export const CloseIconCrossStyled = styled(CloseIconCross)`
  display: block;
  position: absolute;
  z-index: 800;
  top: 10px;
  right: 10px;
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
