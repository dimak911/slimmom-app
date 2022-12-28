import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { routes } from 'helpers/constants';

import logoIcon from '../../images/icons/logo.png';
import slim from '../../images/icons/Slim.svg';
import mom from '../../images/icons/Mom.svg';

import {
  LogoContainer,
  LogoIcon,
  LogoText,
  LogoSlim,
  LogoMom,
} from './Logo.styled';

export const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const path = isLoggedIn ? routes.diaryToday : routes.main;
  const location = useLocation();

  return (
    <Link to={path}>
      <LogoContainer>
        <LogoIcon src={logoIcon} alt="Logo" />
        <LogoText location={location.pathname}>
          <LogoSlim src={slim} alt="Logo" />
          <LogoMom src={mom} alt="Logo" />
        </LogoText>
      </LogoContainer>
    </Link>
  );
};
