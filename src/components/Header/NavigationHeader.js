import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Link, HeaderNavigationWrapper } from './NavigationStyledHeader';
import { useLocation } from 'react-router-dom';

export const NavigationHeader = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  console.log(location);

  return (
    <HeaderNavigationWrapper location={location.pathname}>
      {isLoggedIn ? (
        <Link to="/diary/:date">ЩОДЕННИК</Link>
      ) : (
        <Link to="/login">УВІЙТИ</Link>
      )}
      {isLoggedIn ? (
        <Link to="/calculate">КАЛЬКУЛЯТОР</Link>
      ) : (
        <Link to="/signup">РЕЄСТРАЦІЯ</Link>
      )}
    </HeaderNavigationWrapper>
  );
};
