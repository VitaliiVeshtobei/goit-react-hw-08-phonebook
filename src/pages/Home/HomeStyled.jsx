import { bounceInDown } from 'react-animations';

import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  animation: 3s ${keyframes`${bounceInDown}`};
  font-size: 70px;
  color: ${({ theme: { colors } }) => colors.title};
  text-shadow: 3px 5px 2px #474747;
`;
