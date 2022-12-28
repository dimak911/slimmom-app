import styled from 'styled-components';

export const DiaryProductListStyled = styled.ul`
  color: ${p => p.theme.colors.primary};

  margin-top: 32px;

  @media screen and (min-width: 768px) {
    padding-right: 40px;
    margin-top: 60px;

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
export const SearchNothing = styled.p`
  color: ${p => p.theme.colors.primary};

  margin-top: 32px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;
