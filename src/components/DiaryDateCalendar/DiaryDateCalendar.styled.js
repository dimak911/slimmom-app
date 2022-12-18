import styled from 'styled-components';

export const DiaryDate = styled.span`
  font-family: 'Verdana-Bold';
  line-height: 1.2;
  font-size: ${p => p.theme.fontSizes.s};
  font-style: normal;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;
