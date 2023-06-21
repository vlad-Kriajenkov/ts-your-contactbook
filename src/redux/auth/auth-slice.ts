import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logIn, register } from './auth-operation';
import { IInitialState } from './interface';

const initialState: IInitialState = {
  user: { name: '', email: '' },
  token: null,
  isLoading: false,
  isLoggedIn: false,
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
      action: PayloadAction<{ token: string; data: any }>
    ) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
      state.isLoggedIn = false;
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
        action: PayloadAction<{ token: string; data: any }>
      ) => {
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.isLoggedIn = false;
        state.isLoading = true;
      },
      [logIn.rejected.toString()]: (state: IInitialState) => {
        state.isLoading = false;
      },
  },

 
});

export default AuthSlice.reducer;
