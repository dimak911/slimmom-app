import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RegisterForm = styled.form`
  margin-top: ${p => p.theme.spaceForm[2]}px;
  padding-left: ${p => p.theme.spaceForm[1]}px;
  padding-right: ${p => p.theme.spaceForm[1]}px;

  color: ${p => p.theme.colors.secondary};

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: Verdana-Bold;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: ${p => p.theme.spaceForm[4]}px;
    margin-bottom: 420px;
    padding-left: ${p => p.theme.space[0]}px;
    padding-right: ${p => p.theme.space[0]}px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 180px;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.spaceForm[3]}px;

  font-family: Verdana;
  font-size: ${p => p.theme.fontSizes.xs};
  text-transform: uppercase;
  text-align: center;

  color: ${p => p.theme.colors.accent};
`;

export const Label = styled.label`
  font-family: Verdana;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.spaceForm[2]}px;

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

export const InputForm = styled.input`
  max-width: 280px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${p => p.theme.colors.input};
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

export const ButtonRegister = styled.button`
  width: 182px;
  margin-bottom: ${p => p.theme.spaceForm[1]}px;
  padding: ${p => p.theme.spaceForm[0]}px;

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

export const LinkLoggin = styled(NavLink)`
  display: block;
  width: 182px;
  padding: ${p => p.theme.spaceForm[0]}px;

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

  font-style: italic;
  text-decoration: none;
  text-align: center;

  color: ${p => p.theme.colors.error};
`;
