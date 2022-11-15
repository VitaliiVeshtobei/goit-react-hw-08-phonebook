import { NavItem } from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <div>
      <NavItem to="/register">Register</NavItem>
      <NavItem to="/login">Log In</NavItem>
    </div>
  );
};
