import React, { FC } from 'react';
import {
  Box,
  BoxCont,
  Text,
  AvatarMui,
  WrapperDate,
} from './HomeUzerInfo.styled';
import { useAppSelector } from '../../../redux/hook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from 'moment';

export interface IUser {
  name: string;
  email: string;
}

const HomeUzerInfo: FC = () => {
  const { name, email }: IUser = useAppSelector(state => state.auth.user);

  return (
    <Box>
      <Text>Hello, {name}</Text>
      <BoxCont>
        <WrapperDate>
          <CalendarMonthIcon />
          <div>{moment().format('LL')}</div>
        </WrapperDate>

        <AvatarMui sx={{ width: 32, height: 32 }} />
        <Text>{email}</Text>
      </BoxCont>
    </Box>
  );
};
export { HomeUzerInfo };
