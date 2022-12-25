import styled from 'styled-components';

export const WrapForm = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 21px;
  margin-top: 72px;

  @media (min-width: 768px) {
    margin-bottom: 28px;
    margin-top: 0px;
    display: block;
  }

  @media (min-width: 1280px) {
    display: block;
    margin-bottom: 81px;
  }
`;

export const WrapSideBar = styled.div`
display: flex;
  justify-content: center;
`;

export const WrapPage = styled.div`
@media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
  }
@media (min-width: 1280px) {
    display: flex;
     flex-direction:row;
    justify-content: space-between;
    max-width: 1280px;
  }
`
