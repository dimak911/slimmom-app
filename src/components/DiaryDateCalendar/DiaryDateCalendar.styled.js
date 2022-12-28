import styled from 'styled-components';

export const CalendarWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const DiaryDate = styled.span`
  font-family: 'Verdana-Bold';
  line-height: 1.2;
  font-size: ${p => p.theme.fontSizes.s};
  font-style: normal;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;
export const DiaryDateImg = styled.img`
  width: 20px;
  height: 20px;
`;
