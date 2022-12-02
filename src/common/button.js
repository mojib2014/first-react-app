import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: blue;
  border: 1px solid blue;
  font-size: 20px;
  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
}
`;
