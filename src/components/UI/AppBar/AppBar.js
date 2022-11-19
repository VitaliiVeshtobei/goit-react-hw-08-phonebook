import { Navigation } from 'components/UI/Navigation/Navigation';
import { UserMenu } from 'components/Auth/UserMenu/UserMenu';
import { AuthNav } from 'components/Auth/AuthNav/AuthNav';
import { useAuth } from 'hooks';

import { Header } from './AppBarStyled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
