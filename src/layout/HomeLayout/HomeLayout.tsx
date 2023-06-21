import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { HomeBar, HomeUzerInfo } from './index';
import { FlexBox } from './HomeLayout.styled';
import { Container } from '@mui/material';
const HomeLayout: FC = () => {
  return (
    <FlexBox>
      <HomeBar />
      <Container maxWidth="xl">
        <HomeUzerInfo />
        <Outlet />
      </Container>
    </FlexBox>
  );
};
export { HomeLayout };
