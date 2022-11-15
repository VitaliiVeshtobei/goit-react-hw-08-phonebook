import { useAuth } from 'hooks';
import { NavItem } from './NavigationStyled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavItem to="/">Home</NavItem>
      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
    </nav>
  );
};
