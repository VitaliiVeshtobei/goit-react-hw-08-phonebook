import { NavItem } from './NavigationStyled';

export const Navigation = () => {
  return (
    <nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/contacts">Contacts</NavItem>
    </nav>
  );
};
