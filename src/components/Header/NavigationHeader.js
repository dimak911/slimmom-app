import { Link, HeaderNavigationWrapper } from './NavigationStyledHeader';

export const NavigationHeader = () => {
  return (
    <HeaderNavigationWrapper>
      <Link to="login">SIGN IN</Link>
      <Link to="signup">REGISTRATION</Link>
    </HeaderNavigationWrapper>
  );
};
