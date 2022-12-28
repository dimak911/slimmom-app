import styled from 'styled-components';
import VerdanaBold from '../../fonts/VerdanaBold.ttf';

export const AddProductForm = styled.form`
  align-items: flex-start;
  color: ${p => p.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    padding: 80px 20px;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
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
  position: relative;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;
  width: 285px;

  @media screen and (max-width: 767px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 768px) {
    width: 240px;
    margin-right: 22px;
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
  width: 285px;
  @media screen and (min-width: 768px) {
    width: 107px;
    margin-right: ${p => p.theme.spaceForm[3]}px;
  }
`;

export const ProductForm = styled.input`
  max-width: 280px;
  padding-right: 25px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${p => p.theme.colors.input};

  font-weight: ${p => p.theme.fontWeights.bold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;
`;

export const WeightForm = styled.input`
  text-align: end;
  max-width: 280px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${p => p.theme.colors.input};

  font-weight: ${p => p.theme.fontWeights.bold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;
`;

export const ProductItem = styled.li`
  padding: 10px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;
  cursor: pointer;
  transition: 200ms ease-in;
  &:hover,
  &:active {
    background-color: grey;
    border-radius: ${p => p.theme.radii.md};
  }
`;

export const ButtonLogin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.space[3] * 6}px;
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

  transition: box-shadow 300ms ease-in;
  cursor: pointer;

  :disabled {
    opacity: 0.6;
  }

  :enabled {
    :hover,
    :focus,
    :active {
      box-shadow: 0px 15px 20px rgba(252, 132, 45, 0.4);
      /* transform: translateY(-7px); */
    }
  }
  transition: opacity 200ms ease-in, transform 200ms ease-in;

  @media screen and (max-width: 767px) {
    margin-top: 60px;
    padding: 12px 46px;
    width: 176px;
  }
  @media screen and (min-width: 768px) {
    margin-right: ${p => p.theme.space[5]}px;
  }
`;

export const Error = styled.p`
  max-width: 100%;
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
  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;

export const ProductSelectList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 400px;
  overflow: scroll;
  background-color: ${p => p.theme.colors.track};
  color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.md};
  z-index: 2000;
`;

export const ClearField = styled.button`
  position: absolute;
  bottom: 0;
  right: 30px;
  border: none;
  background: transparent;
  padding: 5px;
  cursor: pointer;
`;
