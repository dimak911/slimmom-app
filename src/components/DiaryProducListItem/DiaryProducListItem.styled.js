import styled from 'styled-components';
import { ReactComponent as cross } from '../../images/icons/close-cross.svg';

export const DiaryProductListItemStyled = styled.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const ProductName = styled.p`
  width: 130px;
  text-align: left;
  border-bottom: 1px solid ${p => p.theme.colors.input};
  padding-bottom: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[3]}px;
  line-height: 1.21;

  @media (min-width: 768px) {
    width: 240px;
    padding-bottom: 20px;
    margin-right: 22px;
  }

  @media (min-width: 1280px) {
    margin-right: 48px;
  }
`;

export const ProductWeight = styled.p`
  width: 49px;
  line-height: 1.21;
  /* line-height: 17px; */
  text-align: center;
  border-bottom: 1px solid ${p => p.theme.colors.input};
  padding-bottom: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[3]}px;

  @media (min-width: 768px) {
    width: 106px;
    text-align: right;
    padding-bottom: 20px;
    margin-right: 46px;
  }

  @media (min-width: 768px) {
    margin-right: 32px;
  }
`;

export const ProductKcal = styled.p`
  width: 58px;
  /* line-height: 17px; */
  line-height: 1.21;
  border-bottom: 1px solid ${p => p.theme.colors.input};
  padding-bottom: ${p => p.theme.space[3]}px;
  margin-right: 17px;

  @media (min-width: 768px) {
    text-align: right;
    width: 106px;
    padding-bottom: 20px;
    margin-right: 32px;
  }
`;

export const SuffixKcal = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};

  @media (min-width: 768px) {
    font-size: inherit;
  }
`;

export const Cross = styled(cross)`
  display: block;
  width: 10px;
  height: 10px;
  opacity: 0.6;
  cursor: pointer;

  fill: ${props => props.theme.colors.black};

  :hover,
  :focus,
  :active {
    fill: ${props => props.theme.colors.accent};
    opacity: 1;
  }

  transition: opacity 200ms ease-in, fill 200ms ease-in;

  @media (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

Cross.defaultProps = { src: cross, alt: 'cross' };

export const RemoveButton = styled.button`
  border: none;
  background-color: inherit;
`;
