import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

import { Grid, TextField } from '@mui/material';
import {
  Title,
  ContainerForm,
  InputBox,
  FlexWrapper,
} from './Registration.styled';
import { CustomButton } from '../../../components';
import { useAppDispatch } from '../../../redux/hook';
import { register } from '../../../redux/auth/auth-operation';

const Registration: FC = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'password':
        return setPassword(value);
      case 'email':
        return setEmail(value);

      default:
        return;
    }
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(register({name, email, password}))
  };

  return (
    <FlexWrapper>
      <ContainerForm maxWidth="xs">
        <Title>Registration</Title>
        <form onSubmit={onSubmit}>
          <InputBox container rowSpacing={2} columnSpacing={{ md: 2 }}>
            <Grid item xs={6}>
              <TextField
                id="email"
                type="email"
                fullWidth
                label="Enter email"
                variant="filled"
                required
                name="email"
                value={email}
                onChange={handelChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="name"
                type="text"
                fullWidth
                label="Enter user name"
                variant="filled"
                required
                name="name"
                value={name}
                onChange={handelChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                type="password"
                fullWidth
                label="Enter password"
                variant="filled"
                required
                name="password"
                value={password}
                onChange={handelChange}
              />
            </Grid>
          </InputBox>
          <CustomButton text={'Add contact'} />
        </form>
      </ContainerForm>
    </FlexWrapper>
  );
};

export default Registration;
