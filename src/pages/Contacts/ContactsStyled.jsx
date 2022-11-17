import styled, { keyframes } from 'styled-components';
import { fadeIn, bounceInDown } from 'react-animations';

export const Container = styled.div`
  animation: 5s ${keyframes`${fadeIn}`};
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 100px;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 3s ${keyframes`${bounceInDown}`};
  font-size: 70px;
  color: ${({ theme: { colors } }) => colors.title};
  text-shadow: 3px 5px 2px #474747;
`;

export const ContainerFormFilter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContacts = styled.h2`
  font-size: 42px;
  text-shadow: 3px 5px 2px #474747;
  color: ${({ theme: { colors } }) => colors.title};
`;
