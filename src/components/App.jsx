import { useSelector } from 'react-redux';

import { selectError, selectIsLoading } from 'redux/selectors';

import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export default function App() {
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
        <Contacts />
      </div>
    </div>
  );
}
