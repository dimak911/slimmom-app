import styled from 'styled-components';

export const WrapForm = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 21px;

  @media (min-width: 768px) {
    margin-bottom: 28px;
  }

  @media (min-width: 1280px) {
    display: block;
    padding-left: 16px;
    margin-bottom: 81px;
  }
`;

export const WrapSideBar = styled.div`
display: flex;
  justify-content: center;
`;

export const WrapPage = styled.div`
@media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
