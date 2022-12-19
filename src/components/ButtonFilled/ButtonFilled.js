import {
  ButtonFilledStyled,
  ButtonFilledTitleStyled,
} from './ButtonFilledStyled.styled';

export function ButtonFilling(props) {
  return (
    <ButtonFilledStyled type="submit">
      <ButtonFilledTitleStyled>{props.children}</ButtonFilledTitleStyled>
    </ButtonFilledStyled>
  );
}
