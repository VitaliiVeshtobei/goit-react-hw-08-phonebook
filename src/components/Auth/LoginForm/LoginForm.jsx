import { useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';

import { logIn } from 'redux/auth/operations';

import { useAuth } from 'hooks';

import { Form, Label, ErrorText } from './LoginFormStyled';

export const LoginForm = () => {
  const { error } = useAuth();

  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = data => {
    dispatch(logIn(data));
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
      <button disabled={!isValid} type="submit">
        Log In
      </button>
      {error && (
        <p style={{ color: 'red' }}>Please enter correct email or password</p>
      )}
    </Form>
  );
};
