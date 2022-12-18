import {
  ButtonFillingStyled,
  ButtonFillingTitleStyled,
} from './ButtonFillingStyled.styled';

export function ButtonFilling(props) {
  return (
    <ButtonFillingStyled type="submit">
      <ButtonFillingTitleStyled>{props.children}</ButtonFillingTitleStyled>
    </ButtonFillingStyled>
  );
}
