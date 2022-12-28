import styled from 'styled-components';


export const Box = styled.div`
  width: 480px;
  @media (max-width: 767px) {
    margin: 0 auto;
    padding: 40px 20px;
    width: 320px;
    /* position: absolute; */
  }
  @media (min-width: 768px) {
    padding: 80px 32px;
    width: 768px;
    display: flex;
    gap: 98px;

    background-color: transparent;
  }
  @media (min-width: 1280px) {
    padding: 0;
    width: 517px;
    height: 850px;
    display: block;

  }
`;

export const SideBarContainer = styled.div`
  @media (max-width: 767px) {
    &:first-child {
      margin-bottom: 40px;
    }
  }
  @media (min-width: 1280px) {
    &:first-child {
      margin-top: 149px;
      margin-bottom: 60px;
    }
    margin-left: 94px;
  }
`;

export const Title = styled.h2`
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;

export const P = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  margin: 0;
  &:nth-child(-n + 5) {
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    &:nth-child(-n + 5) {
      margin-bottom: 10px;
    }
  }
  margin-left: auto;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 270px;
`;
export const Span = styled.span``;
export const Ul = styled.ul`
  text-align: end;
`;

export const Li = styled.li`
  text-align: end;
`;
