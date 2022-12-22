import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Suspense fallback={<Loader/>}>
      {isLoggedIn ? <Navigate to={redirectTo} /> : Component}
    </Suspense>
  );
};
