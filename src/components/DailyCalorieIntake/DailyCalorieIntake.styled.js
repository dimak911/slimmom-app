import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ModalsHeadStyled = styled.p`
  min-height: 70px;
  margin: 0 auto;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.primary};

  @media (max-width: 320px) {
    padding: 0 20px 0;
    font-size: ${props => props.theme.fontSizes.s};
    text-align: start;
  }
`;

export const CaloriesCountStyled = styled.p`
  min-height: 62px;
  margin: 20px auto 0;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.xxl};
  line-height: ${props => props.theme.lineHeights.heading};
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.count};
`;

export const LineStyled = styled.span`
  display: block;
  margin: auto;
  border-bottom: 1px solid ${props => props.theme.colors.input};
`;

export const FoodListWrapperStyled = styled.div`
  max-width: 330px;
  margin: ${props => props.theme.space[5]}px auto 0;
  padding: 0 20px 0;
`;

export const FoodListTitleStyled = styled.p`
  margin: 12px auto 0;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.heading};
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.xs};
  letter-spacing: 0.04em;

  @media (max-width: 320px) {
    margin: 20px auto 0;
  }
`;

export const FoodListStyled = styled.ol`
  margin: 20px 0 0 0;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  li:not(:first-child) {
    margin: ${props => props.theme.space[4]}px 0 0 0;
  }
`;

export const LinkStyled = styled(NavLink)`
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
  text-decoration: none;
  transition: box-shadow 300ms ease-in;
  cursor: pointer;

  :hover,
  :focus {
    box-shadow: 0px 15px 20px rgba(252, 132, 45, 0.4);
  }
`;

export const ButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  display: block;
  margin: auto;
  padding: 13px 0;
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
