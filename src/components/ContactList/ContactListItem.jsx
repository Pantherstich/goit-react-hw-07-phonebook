import { useDispatch } from 'react-redux';
import { DelButton, Item } from './ContactList.styled';
import { removeContactAction } from '../../redux/contactSlice';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const deleteContact = e => {
    dispatch(removeContactAction(e));
  };

  return (
    <Item>
      {contact.name}: {contact.number}
      <DelButton
        type="button"
        id={contact.id}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </DelButton>
    </Item>
  );
};
