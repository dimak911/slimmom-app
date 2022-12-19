import { Link } from 'react-router-dom';
import logoIcon from '../../images/pictures/logo.png';
import logoText from '../../images/pictures/logo-text.png';
import { LogoContainer, LogoIcon, LogoText } from './Logo.styled';

export const Logo = ({ isLogin }) => {
  const path = isLogin ? '/diary' : null;
  return (
    <Link to={path}>
      <LogoContainer>
        <LogoIcon src={logoIcon} alt="Logo" />
        <LogoText src={logoText} alt="Logo" />
      </LogoContainer>
    </Link>
  );
};
