import { Link } from 'react-router-dom';
import logoIcon from '../../images/icons/logo.png';
import logoText from '../../images/icons/logo-text.png';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { LogoContainer, LogoIcon, LogoText } from './Logo.styled';

export const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const path = isLoggedIn ? '/diary/:date' : '/';
  return (
    <Link to={path}>
      <LogoContainer>
        <LogoIcon src={logoIcon} alt="Logo" />
        <LogoText isLoggedIn={isLoggedIn} src={logoText} alt="Logo" />
      </LogoContainer>
    </Link>
  );
};
