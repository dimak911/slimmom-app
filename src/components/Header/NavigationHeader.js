import { Link, HeaderNavigationWrapper } from './NavigationStyledHeader';
import { useLocation } from 'react-router-dom';

export const NavigationHeader = ({ isLoggedIn }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return (
    <HeaderNavigationWrapper
      isLoggedIn={isLoggedIn}
      location={location.pathname}
    >
      {isLoggedIn ? (
        <>
          <Link to="/diary/:date">ЩОДЕННИК</Link>
          <Link to="/calculate">КАЛЬКУЛЯТОР</Link>
        </>
      ) : (
        <>
          <Link to="/login">УВІЙТИ</Link>
          <Link to="/signup">РЕЄСТРАЦІЯ</Link>
        </>
      )}
    </HeaderNavigationWrapper>
  );
};
