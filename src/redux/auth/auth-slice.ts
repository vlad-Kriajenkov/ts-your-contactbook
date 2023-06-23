import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCurrentUser, logIn, LogOut, register } from './auth-operation';
import { IInitialState, IUserPromise, IAction } from './interface';

const initialState: IInitialState = {
  user: { name: '', email: '' },
  token: null,
  isLoading: false,
};

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {},
  extraReducers: {
    //! Register
    [register.pending.toString()]: (state: IInitialState) => {
      state.isLoading = true;
    },
    [register.fulfilled.toString()]: (
      state: IInitialState,
      action: PayloadAction<{ token: string; user: IUserPromise }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;

      state.isLoading = true;
    },
    [register.rejected.toString()]: (state: IInitialState) => {
      state.isLoading = false;
    },
    //! LogIn
    [logIn.pending.toString()]: (state: IInitialState) => {
      state.isLoading = true;
    },
    [logIn.fulfilled.toString()]: (
      state: IInitialState,
      action: PayloadAction<{ token: string; user: IUserPromise }>
    ) => {
      console.log(action.payload.user);
      state.user = action.payload.user;
      state.token = action.payload.token;

      state.isLoading = true;
    },
    [logIn.rejected.toString()]: (state: IInitialState) => {
      state.isLoading = false;
    },
    //! LogOut

    [LogOut.fulfilled.toString()]: (state: IInitialState) => {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLoading = false;
    },

    //! FetchCurrentUser
    [fetchCurrentUser.pending.toString()]: (state: IInitialState) => {
      state.isLoading = true;
    },
    [fetchCurrentUser.fulfilled.toString()]: (
      state: IInitialState,
      action: IAction
    ) => {
      state.user = action.payload;
      state.isLoading = true;
    },
    [fetchCurrentUser.rejected.toString()]: (state: IInitialState) => {
      state.isLoading = false;
    },
  },
});

export default AuthSlice.reducer;
