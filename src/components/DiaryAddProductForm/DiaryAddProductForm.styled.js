 import styled from 'styled-components';
import VerdanaBold from '../../fonts/VerdanaBold.ttf';

export const SigninForm = styled.form`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.secondary};
  
  @media screen and (max-width: 768px) {
    display: none;
    /* flex-direction: column;
    align-items: flex-start;
    margin-top: ${p => p.theme.spaceForm[4]}px;
    padding-left: ${p => p.theme.space[0]}px;
    padding-right: ${p => p.theme.space[0]}px; */
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

export const LabelProduct = styled.label`
  display: flex;
  flex-direction: column;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;

  @media screen and (min-width: 768px) {
    width: 240px;
    margin-right: ${p => p.theme.space[3]*6}px;
  }
`;

export const LabelWeigt = styled.label`
  display: flex;
  flex-direction: column;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;

  @media screen and (min-width: 768px) {
    width: 107px;
    margin-right: ${p => p.theme.spaceForm[3]}px;
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

export const ButtonLogin = styled.button`
  padding: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.space[3]*6}px;
  height: ${p => p.theme.space[3] * 6}px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;

  border-radius: ${p => p.theme.radii.button};
  border: none;

  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};

  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-right: ${p => p.theme.space[5]}px;
  }
`;


export const Error = styled.p`
  position: relative;
  max-width: 100%;
  top: 10%;
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

export const Span = styled.span`
  margin-left: auto;
`;
