// import { useNavigate } from 'react-router-dom';
import {
  ButtonFilledStyled,
  ButtonFilledTitleStyled,
} from './ButtonFilledStyled.styled';

export function ButtonFilling({ props }) {
  // const navigate = useNavigate();
  return (
    // <ButtonFilledStyled type="button" onClick={() => navigate('/signup')}>
    //   <ButtonFilledTitleStyled>{children}</ButtonFilledTitleStyled>
    <ButtonFilledStyled to={props.toRedirect}>
      <ButtonFilledTitleStyled>{props.children}</ButtonFilledTitleStyled>
    </ButtonFilledStyled>
  );
}
