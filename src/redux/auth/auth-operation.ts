import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { INewUser, IUserPromise, IErrorPromise, IUzerLogin } from './interface';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (user: INewUser, thunkAPI: any) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as IErrorPromise);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (user: IUzerLogin, thunkAPI: any) => {
    try {
      const { data } = await axios.post('/users/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as IErrorPromise);
    }
  }
);
