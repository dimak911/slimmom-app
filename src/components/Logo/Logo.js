import { Link } from 'react-router-dom';
import logoIcon from '../../images/icons/logo.png';
import slim from '../../images/icons/Slim.svg';
import mom from '../../images/icons/Mom.svg';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import {
  LogoContainer,
  LogoIcon,
  LogoText,
  LogoSlim,
  LogoMom,
} from './Logo.styled';

export const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const path = isLoggedIn ? '/diary/:date' : '/';
  const path = isLoggedIn ? '/diary/:date' : '/';
  return (
    <Link to={path}>
      <LogoContainer>
        <LogoIcon src={logoIcon} alt="Logo" />
        <LogoText>
          <LogoSlim src={slim} alt="Logo" />
          <LogoMom src={mom} alt="Logo" />
        </LogoText>
      </LogoContainer>
    </Link>
  );
};
