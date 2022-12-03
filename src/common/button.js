import styled, { css } from 'styled-components';

export const Button = styled.button`
  border: 1px solid red;
  font-size: 20px;
  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
}
`;
