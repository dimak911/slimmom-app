import { Link, HeaderNavigationWrapper } from './NavigationStyledHeader';

export const NavigationHeader = () => {
  return (
    <HeaderNavigationWrapper>
      <Link to="login">УВІЙТИ</Link>
      <Link to="signup">РЕЄСТРАЦІЯ</Link>
    </HeaderNavigationWrapper>
  );
};
