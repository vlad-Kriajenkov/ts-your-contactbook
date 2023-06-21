import React, { FC } from 'react';
import { useAppSelector } from '../redux/hook';
import { Navigate } from 'react-router-dom';
interface IPrivateRoute {
  component: JSX.Element;
  redirectTo: string;
}

export const Private: FC<IPrivateRoute> = ({
  component,
  redirectTo = '/',
}): JSX.Element => {
  const token: string | null = useAppSelector(state => state.auth.token);
  console.log(token);
  
  const shouldRedirect = !token;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};

export const Public: FC<IPrivateRoute> = ({
  component,
  redirectTo = '/',
}): JSX.Element => {
  const token: string = useAppSelector(state => state.auth.token);

  return token ? <Navigate to={redirectTo} /> : component;
};
