import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const Username = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  &:hover,
  &:focus {
    color: ${({ theme: { colors } }) => colors.activeLink};
  }
`;
