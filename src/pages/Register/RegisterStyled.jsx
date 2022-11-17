import { fadeIn } from 'react-animations';

import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  animation: 5s ${keyframes`${fadeIn}`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
