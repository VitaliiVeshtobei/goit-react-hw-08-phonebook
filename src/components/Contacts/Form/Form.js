import { useDispatch } from 'react-redux';
import { addContact } from '../../../redux/contacts/operations';

import { Input, Button, Label } from './FormStyled';

export function Form() {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </form>
    </div>
  );
}
