import styled from 'styled-components';

export const Form = styled.form`
  align-items: center;
`;

export const Input = styled.input`
  margin-left: 10px;
  margin-right: 10px;
  height: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-color: transparent;
`;

export const Button = styled.button`
  color: #fff;
  background-color: ${({ theme: { colors } }) => colors.activeLink};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  /* letter-spacing: 0.06em; */
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-color: transparent;
  transition-property: red;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${({ theme: { colors } }) => colors.title};
  }
`;

export const Label = styled.label`
  font-size: 22px;
`;
