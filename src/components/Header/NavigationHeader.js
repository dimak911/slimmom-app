import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectUser } from 'redux/auth/selectors';
import { Link, HeaderNavigationWrapper } from './NavigationStyledHeader';
import { getSelectedDate } from 'redux/date/selectors';
import { initialDate } from 'App';
import { selectCalculateValue } from 'redux/calculate/selectors';

export const NavigationHeader = ({ isLoggedIn }) => {
  const location = useLocation();
  const { data } = useSelector(selectUser);
  const { formData } = useSelector(selectCalculateValue);
  const selectedDate = useSelector(getSelectedDate);

  return (
    <HeaderNavigationWrapper
      isLoggedIn={isLoggedIn}
      location={location.pathname}
    >
      {isLoggedIn ?
        ((data?.height || formData?.height) && (
          <>
            <Link
              to={`/diary/${selectedDate ? selectedDate.split('.').join('-') : initialDate
                }`}
            >
              ЩОДЕННИК
            </Link>
            <Link to="/calculate">КАЛЬКУЛЯТОР</Link>
          </>
        ))
        : (
          <>
            <Link to="/login">УВІЙТИ</Link>
            <Link to="/signup">РЕЄСТРАЦІЯ</Link>
          </>
        )}
    </HeaderNavigationWrapper>
  );
};
