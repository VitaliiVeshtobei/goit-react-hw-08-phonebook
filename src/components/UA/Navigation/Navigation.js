import { useAuth } from 'hooks';

import { NavItem } from './NavigationStyled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      {isLoggedIn ? (
        <NavItem to="/contacts">Contacts</NavItem>
      ) : (
        <NavItem to="/">Home</NavItem>
      )}
    </nav>
  );
};
