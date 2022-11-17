import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-size: 24px;
  color: #2a363b;
  &.active {
    color: ${({ theme: { colors } }) => colors.activeLink};
  }
`;
