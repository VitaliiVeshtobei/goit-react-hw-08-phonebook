import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';

export const ButtonContact = styled.button`
  margin-left: 10px;
  color: #fff;
  background-color: ${({ theme: { colors } }) => colors.activeLink};
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-color: transparent;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${({ theme: { colors } }) => colors.title};
  }
`;

export const ListContatcts = styled.ul`
  list-style: none;
  padding: 0;
`;
export const ItemContact = styled.li`
  animation: 0.5s ${keyframes`${fadeInLeft}`};
  font-size: 22px;
  margin-top: 10px;
`;
