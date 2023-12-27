import { Button, ContForm, Input, Label } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { addContactAction } from '../../redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeFilter = event => {
    const { name, value } = event.currentTarget;
    if (
      (name === 'name' && /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ' ]*$/.test(value)) ||
      (name === 'number' && /^[0-9-]*$/.test(value))
    ) {
      if (name === 'name') {
        setName(value);
      } else if (name === 'number') {
        setNumber(value);
      }
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExist) {
      alert(`${newContact.name} is contacts.`);
    } else {
      dispatch(addContactAction(newContact));
    }
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
          onChange={onChangeFilter}
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={onChangeFilter}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </ContForm>
  );
};
