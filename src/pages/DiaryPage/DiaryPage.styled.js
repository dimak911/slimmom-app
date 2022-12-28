import styled from 'styled-components';

export const BoxForm = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-top: 60px;
  margin-bottom: 136px;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const WrapForm = styled.div`
  width: 320px;
  background-color: ${p => p.isShowAddForm && '#fff'};
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    padding-left: 12px;
    width: 768px;
    margin-top: 100px;
    margin-bottom: 55px;
  }

  @media (min-width: 1280px) {
    margin-top: 147px;
    margin-bottom: 56px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const WrapSideBar = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapPage = styled.div`
  background-color: ${p => p.isShowAddForm && '#fff'};
  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledSubdirectoryIconWrapper = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 91px;
  left: 14px;

  @media (min-width: 768px) {
    display: none;
  }
`;
export const StyledSubdirectoryIcon = styled.img`
  width: 12px;
  height: 7px;
  cursor: pointer;
  color: ${props => props.theme.colors.black};
`;

export const MobileBoxForm = styled.div`
  margin-top: -80px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;
