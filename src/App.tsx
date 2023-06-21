import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthLayout, HomeLayout } from './layout';
import Authorization from './page/AuthNavigation/Authorization/Authorization';
import Registration from './page/AuthNavigation/Registration/Registration';
import { Private, Public } from './hooks/Route';
import UserInfo from './page/UserInfo/UserInfo';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
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
        <Route
          path="/home"
          element={<Private component={<HomeLayout />} redirectTo="/" />}
        >
          <Route
            path="userInfo"
            element={<Private component={<UserInfo/>} redirectTo="/" />}
          />
          <Route
            path="phonebook"
            element={<Private component={<>phonebook</>} redirectTo="/" />}
          />
        </Route>
      </Routes>
    </div>
  );
}
// <AuthLayout />
export default App;
