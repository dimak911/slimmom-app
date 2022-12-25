import styled from 'styled-components';
import cross from './cross.svg';

export const DiaryProductListItemStyled = styled.li`
  display: flex;
  margin-bottom: 16px;
`;

export const ProductName = styled.p`
  width: 130px;
  text-align: left;
  border-bottom: 1px solid ${p => p.theme.colors.input};
  padding-bottom: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[3]}px;

  @media (min-width: 768px) {
    width: 240px;
    padding-bottom: 20px;
    margin-right: 22px;
  }
`;

export const ProductWeight = styled.p`
  width: 49px;
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
`;

export const ProductKcal = styled.p`
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

export const Cross = styled.img`
  width: 10px;
  height: 10px;
  opacity: 0.6;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
  :active {
    opacity: 1;
  }

  transition: opacity 200ms ease-in;

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
