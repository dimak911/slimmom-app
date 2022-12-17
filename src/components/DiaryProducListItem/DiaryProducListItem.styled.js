import styled from 'styled-components';
import cross from './cross.svg';

export const DiaryProductListItemStyled = styled.li`
  display: flex;
`;

export const ProductName = styled.p`
  width: 130px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
  margin-right: 8px;
  @media (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 20px;
    margin-right: 22px;
  }
  @media (min-width: 1280px) {
    width: 240px;
  }
`;

export const ProductWeight = styled.p`
  width: 49px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
  margin-right: 8px;

  @media (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 20px;
    margin-right: 46px;
    text-align: right;
  }
  @media (min-width: 1280px) {
    width: 106px;
    text-align: right;
  }
`;

export const ProductKcal = styled.p`
  /* width: 58px; */
  text-align: right;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
  margin-right: 17px;
  /* font-size: 10px; */

  @media (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 20px;
    margin-right: 32px;
  }
  @media (min-width: 1280px) {
    width: 106px;
  }
`;

export const Cross = styled.img`
  width: 10px;
  height: 10px;
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
