import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { refreshCalories } from 'redux/calculate/operations';
import { selectCalculateValue } from 'redux/calculate/selectors';
import { selectIsRefreshing, selectIsLoggedIn } from 'redux/auth/selectors';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout/Layout';
import { routes } from 'helpers/constants';

const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('pages/LoginPage'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const CalculatorPage = lazy(() =>
  import('pages/CalculatorPage/CalculatorPage')
);
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));

export const App = () => {
  const dispatch = useDispatch();
  const calculateData = useSelector(selectCalculateValue);
  const { isRefreshing } = useSelector(selectIsRefreshing);
  const { isLoggedIn } = useSelector(selectIsLoggedIn);
  const noFormDataDirect = !calculateData.countedCalories
    ? routes.calculate
    : routes.diaryToday;

  useEffect(() => {
    dispatch(refreshUser());
    isLoggedIn && dispatch(refreshCalories());
    !isRefreshing && dispatch(refreshCalories());
  }, [dispatch, isLoggedIn, isRefreshing]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={routes.main} element={<Layout />}>
          <Route
            path={routes.main}
            element={
              <RestrictedRoute
                redirectTo={noFormDataDirect}
                component={<MainPage />}
              />
            }
          />
          <Route
            path={routes.signup}
            element={
              <RestrictedRoute
                redirectTo={noFormDataDirect}
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path={routes.login}
            element={
              <RestrictedRoute
                redirectTo={noFormDataDirect}
                component={<LoginPage />}
              />
            }
          />
          <Route
            path={routes.diaryPath}
            element={
              <PrivateRoute
                redirectTo={
                  !calculateData.countedCalories ? routes.main : routes.login
                }
                component={<DiaryPage />}
              />
            }
          />
          <Route
            path={routes.calculate}
            element={
              <PrivateRoute
                redirectTo={
                  !calculateData.countedCalories ? routes.main : routes.login
                }
                component={<CalculatorPage />}
              />
            }
          />
        </Route>

        <Route path="*" element={<Navigate to={routes.main} replace />}></Route>
      </Routes>
    </>
  );
};
