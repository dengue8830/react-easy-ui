// import * as React from 'react';
import styled from 'styled-components';

// interface Props {
//   value?: string
//   [key: string]: any
// }

// export function Input(props: Props) {
//   return (
//     <InputContainer {...props}>
//       <StyledInput {...props} />
//     </InputContainer>
//   );
// }

export const InputContainer = styled.div`
  display: flex;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 10px;
  border-color: teal;
  padding: 0.4em 0.5em;
  background: white;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  background: inherit;
  color: inherit;
  outline: 0;
  padding: 0em 0.4em;
  font-size: ${props => props.theme.text.fontSize};
  font-family: ${props => props.theme.text.fontFamily};
  color: ${props => props.theme.screenContrastColor};
  /* TODO: make themeable */
  font-weight: 400;
  letter-spacing: 0.14px;
`;
