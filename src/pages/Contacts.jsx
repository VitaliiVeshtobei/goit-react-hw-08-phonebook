import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

import { Form } from '../components/Form/Form';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';

export const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <div>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactsList />
      </div>
    </div>
  );
};
