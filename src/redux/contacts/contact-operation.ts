import axios from 'axios';

import {
  IAddContact,
  IDataPromis,
  INewContact,
} from '../../interface/IContact/interface';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export interface IErrorPromise {
  errorMessage: string;
}

export const addContact = createAsyncThunk(
  'contact/add',
  async (contact: IAddContact, thunkAPI: any): Promise<IDataPromis> => {
    try {
      const { data } = await axios.post('/contacts', contact);
      Notify.success('Contact successfully added.');
      return data;
    } catch (error) {
      Notify.failure('Contact not added.');
      return thunkAPI.rejectWithValue(error as IErrorPromise);
    }
  }
);

export const getContacts = createAsyncThunk(
  'contact/getAll',
  async (_, thunkAPI: any): Promise<IDataPromis[]> => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as IErrorPromise);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (id: string, thunkAPI: any): Promise<IDataPromis> => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      Notify.success('Contact successfully deleted.');
      return data;
    } catch (error) {
      Notify.failure('Contact not deleted .');
      return thunkAPI.rejectWithValue(error as IErrorPromise);
    }
  }
);

export const patchContact = createAsyncThunk(
  'contact/patchContact',
  async (contact: INewContact, thunkAPI: any): Promise<IDataPromis> => {
    try {
      const { id, name, number } = contact;
      const { data } = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });
      Notify.success('Contact updated .');
      return data;
    } catch (error) {
      Notify.failure('Contact not updated .');
      return thunkAPI.rejectWithValue(error as IErrorPromise);
    }
  }
);
