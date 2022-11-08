import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selectors';

import { ButtonContact, ListContatcts, ItemContact } from './ContactsStyled';

export function Contacts() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  const dispatch = useDispatch();

  return (
    <ListContatcts>
      {visibleContacts.map(contact => {
        return (
          <ItemContact key={contact.id}>
            {contact.name}: {contact.number}
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
