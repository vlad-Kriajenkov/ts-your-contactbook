import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { INewUser, IErrorPromise, IUzerLogin } from './interface';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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
      Notify.success('Registration successful');
      return data;
    } catch (error) {
      Notify.failure(' Something went wrong.');
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
      Notify.success('Entry successful ');
      return data;
    } catch (error) {
      Notify.failure(' Something went wrong.');
      return thunkAPI.rejectWithValue(error as IErrorPromise);
    }
  }
);

export const LogOut = createAsyncThunk(
  'auth/logOut',
  async (_: any, thunkAPI: any) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      Notify.failure('Exit not successful.');
      return thunkAPI.rejectWithValue(error as IErrorPromise);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/fresh',
  async (_, thunkAPI: any) => {
    const state = thunkAPI.getState();
    const persisterToken: string = state.auth.token;

    if (!persisterToken) {
      return;
    }
    token.set(persisterToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as IErrorPromise);
    }
  }
);
