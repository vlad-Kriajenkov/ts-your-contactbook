import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthBar } from './index';
import { Box } from './AuthLayout.styled';
const AuthLayout: FC = () => {
  return (
    <Box>
      <AuthBar />
      <Outlet />
    </Box>
  );
};
export { AuthLayout };
