import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchContacts } from '../../redux/operations';
import { deleteContact } from '../../redux/operations';
import { selectContacts, selectVisibleContacts } from '../../redux/selectors';

import { ButtonContact, ListContatcts, ItemContact } from './ContactsStyled';

export function Contacts() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ListContatcts>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {visibleContacts.map(contact => {
        return (
          <ItemContact key={contact.id}>
            {contact.name}: {contact.phone}
            <ButtonContact
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </ButtonContact>
          </ItemContact>
        );
      })}
    </ListContatcts>
  );
}
