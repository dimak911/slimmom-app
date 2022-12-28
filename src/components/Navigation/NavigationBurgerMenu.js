import { useSelector } from 'react-redux';
import { getSelectedDate } from 'redux/date/selectors';
import { initialDate } from 'helpers/constants';

import { Link, Section, Wrapper } from './NavigationBurgerMenu.styled';

export const NavigationBurgerMenu = ({ burgerState, burgerClose }) => {
  const selectedDate = useSelector(getSelectedDate);

  return (
    <Section burgerActive={burgerState}>
      <Wrapper>
        <Link
          to={`/diary/${
            selectedDate ? selectedDate.split('.').join('-') : initialDate
          }`}
          onClick={burgerClose}
        >
          ЩОДЕННИК
        </Link>
        <Link to="/calculate" onClick={burgerClose}>
          КАЛЬКУЛЯТОР
        </Link>
      </Wrapper>
    </Section>
  );
};
