import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 380px;
  background: #fff;
  border: 2px solid #fff;
  color: #666360;

  height: 40px;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 18px;
  flex: 1;
  border: 2px solid #fff;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff5100;
      border-color: #ff5100;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff5100;
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #333;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
