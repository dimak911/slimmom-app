import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import VerdanaBold from '../../fonts/VerdanaBold.ttf';
import google from './google.svg';

export const SigninForm = styled.form`
  margin-top: ${p => p.theme.spaceForm[2]}px;
  padding-left: ${p => p.theme.spaceForm[1]}px;
  padding-right: ${p => p.theme.spaceForm[1]}px;

  color: ${p => p.theme.colors.secondary};

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 495px;
    margin-top: ${p => p.theme.spaceForm[4]}px;
    padding-left: ${p => p.theme.space[0]}px;
    padding-right: ${p => p.theme.space[0]}px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 255px;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.spaceForm[3]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;
  text-transform: uppercase;
  text-align: center;

  color: ${p => p.theme.colors.accent};
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.spaceForm[2]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

export const InputForm = styled.input`
  max-width: 280px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${p => p.theme.colors.input};

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ButtonLogin = styled.button`
  width: 182px;
  margin-bottom: ${p => p.theme.spaceForm[1]}px;
  padding: ${p => p.theme.spaceForm[0]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;

  border-radius: ${p => p.theme.radii.button};
  border: 2px solid ${p => p.theme.colors.accent};

  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};

  cursor: pointer;

  :hover,
  :focus {
    box-shadow: 0px 15px 20px rgba(252, 132, 45, 0.4);
    transform: translateY(-7px);
  }

  @media screen and (min-width: 768px) {
    margin-right: ${p => p.theme.space[5]}px;
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;

export const LinkRegister = styled(NavLink)`
  display: block;
  width: 182px;
  padding: ${p => p.theme.spaceForm[0]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;
  text-decoration: none;
  text-align: center;

  border-radius: ${p => p.theme.radii.button};
  border: 2px solid ${p => p.theme.colors.accent};

  color: ${p => p.theme.colors.accent};
  cursor: pointer;

  :hover,
  :focus {
    box-shadow: 0px 15px 20px rgba(252, 132, 45, 0.4);
    transform: translateY(-7px);
  }
`;

export const Error = styled.p`
  max-width: 100%;
  margin: ${p => p.theme.space[0]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: italic;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;
  text-decoration: none;
  text-align: center;

  color: ${p => p.theme.colors.error};
`;

export const Social = styled.div`
  margin-top: 30px;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const SocialTitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;
  text-decoration: none;
  text-align: center;
`;

export const GoogleBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 20px auto;
  width: 182px;
  height: 46px;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid #fc842d;
  border-radius: 30px;
  background-color: #ffffff;
  color: #212121;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  cursor: pointer;
  :hover,
  :focus {
    background-color: #fc842d;
    color: #ffffff;
    border: 2px solid #fc842d;
    transition: background-color 300ms ease, color 300ms ease;
  }
`;

export const Blue = styled.span`
  color: #1e88e5;
`;

export const Red = styled.span`
  color: #e53935;
`;

export const Yellow = styled.span`
  color: #ffb300;
`;

export const Green = styled.span`
  color: #43a047;
`;

export const GoogleSvg = styled.img`
  position: absolute;
  width: 26px;
  height: 26px;
  top: 0;
  right: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

GoogleSvg.defaultProps = { src: google, alt: 'google' };
