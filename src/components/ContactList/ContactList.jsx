import { useDispatch, useSelector } from 'react-redux';
import { ContactListItem } from './ContactListItem';
import { useEffect } from 'react';
import { fetchContactsAction } from '../../redux/api';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && !error && <b>LOADING</b>}
      {contacts.map(({ name, id, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
