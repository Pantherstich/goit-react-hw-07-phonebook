import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilterValue = state => state.filter.value;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);
