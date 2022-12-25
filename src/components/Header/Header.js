import { Logo } from 'components/Logo/Logo';
import {
  BurgerIconStyled,
  HeaderStyled,
  CrossIconStyled,
} from 'components/Header/HeaderStyled';
import { NavigationHeader } from './NavigationHeader';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import { useState } from 'react';
import { NavigationBurgerMenu } from '../../components/Navigation/NavigationBurgerMenu';
// import { HeaderUnderline } from 'components/Header/HeaderStyled';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [burgerActive, setBurgerActive] = useState(false);

  const burgerAction = () => {
    setBurgerActive(!burgerActive);
  };
  return (
    <>
      <HeaderStyled>
        <Logo />
        {!isLoggedIn ? (
          <NavigationHeader isLoggedIn={isLoggedIn} />
        ) : (
          <>
            <NavigationHeader isLoggedIn={isLoggedIn} />{' '}
            <UserInfo burger={burgerActive} setBurger={setBurgerActive} />
            {burgerActive ? (
              <CrossIconStyled onClick={burgerAction} />
            ) : (
              <BurgerIconStyled onClick={burgerAction} />
            )}
          </>
        )}
      </HeaderStyled>

      <NavigationBurgerMenu
        burgerActive={burgerActive}
        setBurger={setBurgerActive}
      />
    </>
  );
};
