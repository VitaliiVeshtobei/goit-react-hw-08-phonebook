import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { pulse } from 'react-animations';

export const NavItem = styled(NavLink)`
  animation: 1s infinite ${keyframes`${pulse}`};
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-size: 24px;
  color: #2a363b;
  &.active {
    color: ${({ theme: { colors } }) => colors.activeLink};
  }
`;
