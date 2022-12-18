import styled from 'styled-components';

export const ButtonFilledStyled = styled.button`
  display: block;
  width: 210px;
  height: 43px;
  margin: 40px auto 0;
  padding: 0;
  border: 0 solid;
  background-color: ${props => props.theme.colors.accent};
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border-color: transparent;
  cursor: pointer;
  :active {
    transform: translateY(4px);
  }
`;

export const ButtonFilledTitleStyled = styled.span`
  width: 160px;
  height: 17px;
  font-weight: 700;
  font-size: 14px;
  line-height: ${props => props.theme.lineHeights.heading};
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.white};
`;
