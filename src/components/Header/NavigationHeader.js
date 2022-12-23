import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { Link, HeaderNavigationWrapper } from './NavigationStyledHeader';

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
          <Link to={`/diary/${moment(new Date()).format('DD-MM-YYYY')}`}>
            ЩОДЕННИК
          </Link>
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
