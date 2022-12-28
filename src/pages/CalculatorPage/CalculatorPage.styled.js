import styled from 'styled-components';

export const WrapPage = styled.div`
  margin-top: 40px;
  padding-top: 40px;

  @media (min-width: 768px) {
    margin-top: 100px;
    padding: 0;
  }
  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
  }
`;

export const WrapForm = styled.div`
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 610px;
    padding-bottom: 55px;
  }

  @media (min-width: 1280px) {
    margin-left: 0;
    margin-right: 0;
    padding-left: 32px;
  }
`;

export const WrapSideBar = styled.div`
  display: flex;
  justify-content: center;

  background-color: #f0f1f3;

  @media (max-width: 767px) {
    padding-top: 40px;
  }
  @media (max-width: 1279px) {
    padding-top: 80px;
  }
  @media (min-width: 1280px) {
    background-color: transparent;
    padding-right: 60px;
  }
`;
