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
export const WrapCalendar = styled.div`
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const WrapForm = styled.div`
  @media (max-width: 767px) {
    width: 320px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;

    margin-left: 0;
    margin-right: 0;
    padding-bottom: 55px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 55px;
  }
`;

export const BoxForm = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const WrapSideBar = styled.div`
  display: flex;
  justify-content: center;

  background-color: #f0f1f3;

  @media (max-width: 767px) {
    padding-top: 40px;
  }
  @media (max-width: 1287px) {
    padding-top: 80px;
  }
  @media (min-width: 1280px) {
    background-color: transparent;
    padding-right: 20px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const Button = styled.button`
  padding: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.space[3] * 6}px;
  height: ${p => p.theme.space[3] * 6}px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: ${p => p.theme.radii.button};
  border: none;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
`;
