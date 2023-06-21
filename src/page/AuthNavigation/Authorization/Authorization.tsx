import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Grid, TextField } from '@mui/material';
import {
  Title,
  ContainerForm,
  InputBox,
  FlexWrapper,
} from './Authorization.styled';
import { CustomButton } from '../../../components/index';
import { useAppDispatch } from '../../../redux/hook';
import { logIn } from '../../../redux/auth/auth-operation';

const Authorization: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  


  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <FlexWrapper>
      <ContainerForm maxWidth="xs">
        <Title>Authorization</Title>
        <form onSubmit={onSubmit}>
          <InputBox container rowSpacing={2} columnSpacing={{ md: 2 }}>
            <Grid item xs={12}>
              <TextField
                id="email"
                type="email"
                fullWidth
                label="Enter email"
                variant="filled"
                required
                onChange={handlerChange}
                value={email}
                name="email"
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
                onChange={handlerChange}
                value={password}
                name="password"
              />
            </Grid>
          </InputBox>
          <CustomButton text={'Log in'} />
        </form>
      </ContainerForm>
    </FlexWrapper>
  );
};

export default Authorization;
