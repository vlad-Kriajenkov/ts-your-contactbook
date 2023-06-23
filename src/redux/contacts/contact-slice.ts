import { createSlice } from '@reduxjs/toolkit';

import {
  IContactStateProps,
  IAction,
  IActionOne,
} from '../../interface/IContact/interface';
import {
  addContact,
  deleteContact,
  getContacts,
  patchContact,
} from './contact-operation';

const initialState = {
  contacts: [],
  filter: '',
} as IContactStateProps;

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: {
    //! Add

    [addContact.fulfilled.toString()]: (
      state: IContactStateProps,
      action: IActionOne
    ) => {
      state.contacts = [...state.contacts, action.payload];
    },
    [addContact.rejected.toString()]: (state: IContactStateProps) => {},

    //! GET

    [getContacts.fulfilled.toString()]: (
      state: IContactStateProps,
      action: IAction
    ) => {
      state.contacts = action.payload;
    },
    [getContacts.rejected.toString()]: (state: IContactStateProps) => {},

    //! Delete

    [deleteContact.fulfilled.toString()]: (
      state: IContactStateProps,
      action: IActionOne
    ) => {
      const deleteIdContact: string = action.payload.id;
      state.contacts = state.contacts.filter(
        contact => contact.id !== deleteIdContact
      );
    },

    //! Fetch Contacts

    [patchContact.fulfilled.toString()]: (
      state: IContactStateProps,
      action: IActionOne
    ) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts[index] = action.payload;
    },
  },
});

export default contactSlice.reducer;
