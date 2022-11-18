import { useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';

import { registerForm } from 'redux/auth/operations';

import { useAuth } from 'hooks';

import { Form, Label, Button, ErrorText } from './RegisterFormStyled';

export const RegisterForm = () => {
  const { error } = useAuth();

  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = data => {
    dispatch(registerForm(data));
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Username
        <input
          {...register('name', {
            required: 'Field is required',
            pattern: {
              value:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
              message:
                "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
            },
            minLength: {
              value: 3,
              message: 'Name length must be greater than 3',
            },
          })}
        />
        <ErrorText>
          {errors?.name && <p>{errors?.name.message || 'Error'}</p>}
        </ErrorText>
      </Label>
      <Label>
        Email
        <input
          {...register('email', {
            required: 'Field is required',
            pattern:
              /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
          })}
        />
        <ErrorText>
          {errors?.email && (
            <p>
              {errors?.email.message ||
                'Please enter a valid email e.g. "test@mail.com"'}
            </p>
          )}
        </ErrorText>
      </Label>
      <Label>
        Password
        <input
          {...register('password', {
            minLength: {
              value: 7,
              message: 'Password length must be at least 7 characters',
            },
            pattern: /[A-Za-z]/,
          })}
        />
        <ErrorText>
          {errors?.password && <p>{errors?.password.message || 'Error'}</p>}
        </ErrorText>
      </Label>
      <Button disabled={!isValid} type="submit">
        Register
      </Button>
      {error && <p style={{ color: 'red' }}>This user already exists</p>}
    </Form>
  );
};
