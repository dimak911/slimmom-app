import moment from 'moment';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectCalculateValue } from 'redux/calculate/selectors';
import { Link, HeaderNavigationWrapper } from './NavigationStyledHeader';

export const NavigationHeader = ({ isLoggedIn }) => {
  const location = useLocation();
  const { formData } = useSelector(selectCalculateValue);

  return (
    <HeaderNavigationWrapper
      isLoggedIn={isLoggedIn}
      location={location.pathname}
    >
      {isLoggedIn ? (
        formData?.height && (
          <>
            <Link to={`/diary/${moment(new Date()).format('DD-MM-YYYY')}`}>
              ЩОДЕННИК
            </Link>
            <Link to="/calculate">КАЛЬКУЛЯТОР</Link>
          </>
        )
      ) : (
        <>
          <Link to="/login">УВІЙТИ</Link>
          <Link to="/signup">РЕЄСТРАЦІЯ</Link>
        </>
      )}
    </HeaderNavigationWrapper>
  );
};
