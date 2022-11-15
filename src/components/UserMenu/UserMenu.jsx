import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { Wrapper, Username } from './UserMenuStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Wrapper>
      <Username>{user.email}</Username>
      <button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </Wrapper>
  );
};
