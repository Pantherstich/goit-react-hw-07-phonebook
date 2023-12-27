import { getContacts, getFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { ContactListItem } from './ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContactsByName = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
    return filteredContacts;
  };

  return (
    <ul>
      {filterContactsByName().map(contact => (
        <ContactListItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};
