import styled from 'styled-components';

export const HeaderStyled = styled.section`
  padding-top: 20px;
  padding-bottom: 16px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 0px;
    justify-content: flex-start;
    gap: 40px;
  }
`;

export const HeaderUnderline = styled.div`
  margin: 0px auto;
  width: 320px;
  border-bottom: 2px solid #e0e0e0;

  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;
