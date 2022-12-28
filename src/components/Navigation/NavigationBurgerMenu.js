import { useSelector } from 'react-redux';
import { getSelectedDate } from 'redux/date/selectors';
import { initialDate } from 'helpers/constants';

import { Link, Section, Wrapper } from './NavigationBurgerMenu.styled';

export const NavigationBurgerMenu = ({ burgerActive, setBurger }) => {
  const selectedDate = useSelector(getSelectedDate);

  return (
    <Section burgerActive={burgerActive}>
      <Wrapper>
        <Link
          to={`/diary/${
            selectedDate ? selectedDate.split('.').join('-') : initialDate
          }`}
          onClick={() => setBurger(false)}
        >
          ЩОДЕННИК
        </Link>
        <Link to="/calculate" onClick={() => setBurger(false)}>
          КАЛЬКУЛЯТОР
        </Link>
      </Wrapper>
    </Section>
  );
};
