import { useSelector } from 'react-redux';

import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import { Form } from '../../components/Contacts/Form/Form';
import { ContactsList } from '../../components/Contacts/ContactsList/ContactsList';
import { Filter } from '../../components/Contacts/Filter/Filter';

import {
  Container,
  Title,
  ContainerFormFilter,
  TitleContacts,
} from './ContactsStyled';

export const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <Title>Phonebook</Title>
      <Container>
        <ContainerFormFilter>
          <Form />
          <Filter />
        </ContainerFormFilter>
        <div>
          <TitleContacts>Contacts</TitleContacts>
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactsList />
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
