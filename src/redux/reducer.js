import { filterReducer } from './Filter/filterSlice';
import { contactsReducer } from './Contacts/contactsSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const reducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});