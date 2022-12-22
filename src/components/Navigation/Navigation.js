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
        {isLoggedIn ? <Link to="/" end>ЩОДЕННИК</Link> : <Link to="/login">УВІЙТИ</Link>}
        {isLoggedIn ? <Link to="/calculate">КАЛЬКУЛЯТОР</Link> : <Link to="/signup">РЕЄСТРАЦІЯ</Link>}
      </Wrapper>
    </Container>
  )
};