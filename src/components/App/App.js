import { Route, Routes } from 'react-router-dom';
import {
  useEffect,
  // lazy
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/auth/authOperations';
import { getIsGettingCurrentUser } from '../../redux/auth/authSelector';

import PublicRoute from '../PublicRoute';
import PrivateRoute from '../PrivateRoute';

// const PrivateRoute = lazy(() => import('../PrivateRoute'));
// const PublicRoute = lazy(() => import('../PublicRoute'));
// const SharedLayout = lazy(() => import('components/SharedLayout'));
// const Home = lazy(() => import('pages/Home'));
// const RegisterForm = lazy(() => import('pages/Registration/RegisterForm'));
// const LoginForm = lazy(() => import('pages/LogIn/LoginForm'));
// const Contacts = lazy(() => import('pages/Contacts/Contacts/index'));

import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import RegisterForm from 'pages/Registration/RegisterForm';
import LoginForm from 'pages/LogIn/LoginForm';
import Contacts from 'pages/Contacts/Contacts/index';

const App = () => {
  const refreshing = useSelector(getIsGettingCurrentUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !refreshing && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          {/* <Route
              path="contacts/{contactId}"
              element={
                <PrivateRoute>
                  <Modal />
                </PrivateRoute>
              }
            /> */}
          {/* </Route> */}
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterForm />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginForm />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    )
  );
};

export default App;
