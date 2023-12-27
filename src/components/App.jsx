import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { H1Title, H2Title, Layout } from './App.styled';

export const App = () => {
  return (
    <Layout>
      <H1Title>Phonebook</H1Title>
      <ContactForm />
      <Filter></Filter>
      <H2Title>Contacts</H2Title>
      <ContactList></ContactList>
    </Layout>
  );
};
