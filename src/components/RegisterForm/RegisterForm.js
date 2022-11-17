import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';

import { Form, Label, Button } from './RegisterFormStyled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Username
        <input type="text" name="name" />
      </Label>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
