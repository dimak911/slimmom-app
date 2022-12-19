import styled from 'styled-components';

export const DiaryProductListStyled = styled.ul`
  color: ${p => p.theme.colors.primary};

  @media screen and (min-width: 768px) {
    padding-right: 40px;

    max-height: 250px;
    max-width: 610px;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${p => p.theme.colors.track};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.count};
  }
`;

export const DiaryProductListItemStyled = styled.li`
  display: flex;
  margin-bottom: 16px;
`;
