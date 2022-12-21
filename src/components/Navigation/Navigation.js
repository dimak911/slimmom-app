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
        {isLoggedIn ? <Link to="/" end>DIARY</Link> : <Link to="/login">SIGN IN</Link>}
        {isLoggedIn ? <Link to="/calculate">CALCULATOR</Link> : <Link to="/signup">REGISTRATION</Link>}
      </Wrapper>
    </Container>
  )
};