import { Link, Section, Wrapper } from './NavigationBurgerMenu.styled';

export const NavigationBurgerMenu = ({ burgerActive, setBurger }) => (
  <Section burgerActive={burgerActive}>
    <Wrapper>
      <Link to="/diary/:date" onClick={() => setBurger(false)}>
        ЩОДЕННИК
      </Link>
      <Link to="/calculate" onClick={() => setBurger(false)}>
        КАЛЬКУЛЯТОР
      </Link>
    </Wrapper>
  </Section>
);
