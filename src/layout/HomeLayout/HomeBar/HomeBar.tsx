import React, { FC } from 'react';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Link, Nav, LogOutBtn } from './HomeBar.styled';
import { useAppDispatch } from '../../../redux/hook';

const HomeBar: FC = () => {
  const dispatch = useAppDispatch();
  const onLogout = () => {};
  return (
    <Box>
      <Nav>
        <Link to="userInfo">
          <PersonIcon /> <p>USer Info</p>
        </Link>
        <Link to="phonebook">
          <ContactPhoneIcon /> <p>Phonebook</p>
        </Link>
      </Nav>
      <LogOutBtn
        onClick={onLogout}
        variant="outlined"
        startIcon={<LogoutIcon />}
      >
        Log out
      </LogOutBtn>
    </Box>
  );
};
export { HomeBar };
