import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchContacts } from '../../../redux/contacts/operations';
import { deleteContact } from '../../../redux/contacts/operations';
import {
  selectContacts,
  selectVisibleContacts,
} from '../../../redux/contacts/selectors';

import {
  ButtonContact,
  ListContatcts,
  ItemContact,
} from './ContactsListStyled';

export function ContactsList() {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  const onClick = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ListContatcts>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {visibleContacts.map(contact => {
        return (
          <ItemContact key={contact.id}>
            {contact.name}: {contact.number}
            <ButtonContact
              type="button"
              onClick={() => {
                onClick(contact.id);
              }}
            >
              Delete
            </ButtonContact>
          </ItemContact>
        );
      })}
    </ListContatcts>
  );
}
