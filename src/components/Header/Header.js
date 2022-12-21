import { Logo } from 'components/Logo/Logo';
import { HeaderStyled } from 'components/Header/HeaderStyled';
import { NavigationHeader } from './NavigationHeader';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { UserInfo } from '../../components/UserInfo/UserInfo';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderStyled>
      <Logo />
      {!isLoggedIn ? <NavigationHeader /> : <UserInfo />}
    </HeaderStyled>
  );
};
