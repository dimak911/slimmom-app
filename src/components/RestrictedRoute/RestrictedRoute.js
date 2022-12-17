import { selectIsLoggedIn } from 'Redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
