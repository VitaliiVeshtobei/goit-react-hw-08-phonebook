import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export default function App() {
  const contactsLocal = localStorage.getItem('contacts');
  const parsContacts = JSON.parse(contactsLocal);

  const [contacts, setContacts] = useState(
    parsContacts ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  const formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const names = contacts.map(contact => contact.name);
    if (names.includes(contact.name)) {
      alert(`${contact.name} is already in contacts`);
    } else {
      setContacts([contact, ...contacts]);
    }
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  // useEffect(() => {
  //   if (localStorage.getItem('contacts') !== null) {
  //     const contactsLocal = localStorage.getItem('contacts');

  //     const parsContacts = JSON.parse(contactsLocal);

  //     setContacts(parsContacts);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <div>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <Contacts contacts={visibleContacts} onDeleteContact={deleteContact} />
      </div>
    </div>
  );
}
