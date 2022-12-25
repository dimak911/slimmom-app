import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Wrapper, Link } from './Navigation.styled';
import { Container } from 'components/Container.styled';
import { initialDate } from 'App';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <Wrapper>
        {isLoggedIn ? (
          <Link to={`/diary/${initialDate}`}>ЩОДЕННИК</Link>
        ) : (
          <Link to="/login">УВІЙТИ</Link>
        )}
        {isLoggedIn ? (
          <Link to="/calculate">КАЛЬКУЛЯТОР</Link>
        ) : (
          <Link to="/signup">РЕЄСТРАЦІЯ</Link>
        )}
      </Wrapper>
    </Container>
  );
};
