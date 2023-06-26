import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Private, Public } from './hooks/Route';
import { AuthLayout, HomeLayout } from './layout';

import { useAppDispatch, useAppSelector } from './redux/hook';
import { fetchCurrentUser } from './redux/auth/auth-operation';
import { getContacts } from './redux/contacts/contact-operation';

// import Registration from './page/AuthNavigation/Registration/Registration';
// import UserInfo from './page/UserInfo/UserInfo';
// import PhoneBook from './page/PhoneBook/PhoneBook';

const Authorization = lazy(
  () => import('./page/AuthNavigation/Authorization/Authorization')
);
const Registration = lazy(
  () => import('./page/AuthNavigation/Registration/Registration')
);
const UserInfo = lazy(() => import('./page/UserInfo/UserInfo'));

const PhoneBook = lazy(() => import('./page/PhoneBook/PhoneBook'));

function App() {
  const dispatch = useAppDispatch();
  const token = useAppSelector(state => state.auth.token);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(getContacts());
    }
  }, [token, dispatch]);

  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/"  element={<AuthLayout />}>
          
            <Route
              path="authorization"
              element={
                <Public
                  component={<Authorization />}
                  redirectTo="/home/userInfo"
                />
              }
            />
            <Route
              path="registration"
              element={
                <Public
                  component={<Registration />}
                  redirectTo="/home/userInfo"
                />
              }
            />
          </Route>
        </Routes>
      </Suspense>
      <Suspense>
        <Routes>
          <Route
            path="/home"
            element={<Private component={<HomeLayout />} redirectTo="/" />}
          >
            <Route
              path="userInfo"
              element={<Private component={<UserInfo />} redirectTo="/" />}
            />
            <Route
              path="phonebook"
              element={<Private component={<PhoneBook />} redirectTo="/" />}
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
// <AuthLayout />
export default App;
