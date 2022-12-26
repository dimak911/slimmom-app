import { getSelectedDate } from 'redux/date/selectors';
import { Link, Section, Wrapper } from './NavigationBurgerMenu.styled';
import { initialDate } from 'App';
import { useSelector } from 'react-redux';

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
