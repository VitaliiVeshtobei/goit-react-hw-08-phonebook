import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

export const Header = styled.header`
  animation: 5s ${keyframes`${fadeIn}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;
