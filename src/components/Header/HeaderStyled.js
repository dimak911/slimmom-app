import styled from 'styled-components';

export const HeaderStyled = styled.section`
  padding: 0px 20px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #e0e0e0;

  @media (min-width: 768px) {
    padding: 20px 32px 16px;
  }

  @media (min-width: 1280px) {
    padding: 80px 16px 0px;
    justify-content: flex-start;
    gap: 40px;
    border-bottom: none;
  }
`;
