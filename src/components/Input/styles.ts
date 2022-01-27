import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasErrors: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  width: 100%;

  color: #666360;
  background: #fff;
  border: 1px solid #fbfbfb;
  border-radius: 10px;

  padding: 16px;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: var(--color-primary);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
      border-color: var(--color-primary);
    `}

  ${props =>
    props.hasErrors &&
    css`
      border-color: var(--color-danger);
    `}

  input {
    flex: 1;
    background: #fff;
    border: 0;
    color: #000;

    &::placeholder {
      color: var(--color-gray);
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const ErrorMessageText = styled.p`
  color: var(--color-secondary);
  
`;