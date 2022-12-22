import styled from 'styled-components';

export const BoxForm = styled.div`
  @media screen and (max-width: 767px) {
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
export const ButtonBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  padding: 60px 136px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
