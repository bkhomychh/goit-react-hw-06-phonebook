import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialContactsState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact(state, { payload: { name, number } }) {
      const newContact = { id: nanoid(), name, number };
      state.push(newContact);
    },
    deleteContact(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
