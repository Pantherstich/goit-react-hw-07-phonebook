import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { H1Title, H2Title, Layout } from './App.styled';
import { selectIsLoading } from '../redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Layout>
      {isLoading && 'LOADING'}

      <H1Title>Phonebook</H1Title>
      <ContactForm />
      <Filter />
      <H2Title>Contacts</H2Title>
      <ContactList></ContactList>
    </Layout>
  );
};
