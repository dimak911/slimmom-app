import styled from 'styled-components';

export const Container = styled.div`
  width: 480px;
  @media (min-width: 768px) {
    margin: 0 auto;
    padding-right: 32px;
    padding-left: 32px;
    width: 768px;
  }
  @media (min-width: 1200px) {
    padding-right: 16px;
    padding-left: 16px;
    width: 1280px;
  }
`;
