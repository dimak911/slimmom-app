import { Link, Section, Wrapper } from './NavigationBurgerMenu.styled';
import { initialDate } from 'App';

export const NavigationBurgerMenu = ({ burgerActive, setBurger }) => (
  <Section burgerActive={burgerActive}>
    <Wrapper>
      <Link to={`/diary/${initialDate}`} onClick={() => setBurger(false)}>
        ЩОДЕННИК
      </Link>
      <Link to="/calculate" onClick={() => setBurger(false)}>
        КАЛЬКУЛЯТОР
      </Link>
    </Wrapper>
  </Section>
);
