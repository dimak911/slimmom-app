import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing, selectUser } from 'redux/auth/selectors';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout/Layout';
import { routes } from 'helpers/constants';


const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('pages/LoginPage'));
const CalculatorPage = lazy(() =>
  import('pages/CalculatorPage/CalculatorPage')
);
// додати сторінку DiaryPage
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { callorie } = useSelector(selectUser);
  const { isRefreshing } = useSelector(selectIsRefreshing);
  const noFormDataDirect = !callorie ? routes.calculate : routes.diaryToday;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

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
                redirectTo={!callorie ? routes.main : routes.login}
                component={<DiaryPage />}
              />
            }
          />
          <Route
            path={routes.calculate}
            element={
              <PrivateRoute
                redirectTo={!callorie ? routes.main : routes.login}
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
