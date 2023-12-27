import { useDispatch } from 'react-redux';
import { DelButton, Item } from './ContactList.styled';
import { deleteContactAction } from '../../redux/api';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactAction(id));
  };

  return (
    <Item>
      {name}: {number}
      <DelButton type="button" onClick={handleDelete}>
        Delete
      </DelButton>
    </Item>
  );
};
