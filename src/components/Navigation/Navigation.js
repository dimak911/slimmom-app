import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Wrapper, Link, Logo } from "./Navigation.styled"
import { Container } from 'components/Container.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
  <Container>
    <Wrapper>
      <Logo />
      {isLoggedIn ? <Link to="">DIARY</Link> : <Link to="">SIGN IN</Link>}
      {isLoggedIn ? <Link to="">CALCULATOR</Link> : <Link to="">REGISTRATION</Link>}
    </Wrapper>
  </Container>
  )
};