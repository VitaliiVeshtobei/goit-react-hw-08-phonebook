import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  &:hover,
  &:focus {
    color: ${({ theme: { colors } }) => colors.activeLink};
  }
`;

export const ErrorText = styled.div`
  margin-top: 5px;
  color: red;
`;
