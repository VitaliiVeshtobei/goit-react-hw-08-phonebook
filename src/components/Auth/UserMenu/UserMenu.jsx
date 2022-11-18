import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { Wrapper, Username, Button } from './UserMenuStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const onClick = () => {
    dispatch(logOut());
  };
  return (
    <Wrapper>
      <Username>{user.email}</Username>
      <Button onClick={onClick}>Logout</Button>
    </Wrapper>
  );
};
