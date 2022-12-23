import {
  ButtonFilledStyled,
  ButtonFilledTitleStyled,
} from './ButtonFilledStyled.styled';

export function ButtonFilling({ props }) {
  return (
    <ButtonFilledStyled to={props.toRedirect}>
      <ButtonFilledTitleStyled>{props.children}</ButtonFilledTitleStyled>
    </ButtonFilledStyled>
  );
}
