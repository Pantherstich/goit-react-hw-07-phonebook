import { Button, ContForm, Input, Label } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
// import { addContactAction } from '../../redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContactAction } from '../../redux/api';
const nameId = nanoid();
const numberId = nanoid();

export const ContactForm = ({ sumbit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isExist = contacts.some(contact => contact.name === name);
    if (isExist) {
      alert(`${name} is in contacts`);
      return;
    }
    dispatch(addContactAction({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <ContForm onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          id={nameId}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          id={numberId}
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </ContForm>
  );
};
