import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contactSlice';
import { filterReducer } from '../redux/filterSlice';
// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
