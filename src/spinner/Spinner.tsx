import * as React from 'react';
import styled from 'styled-components';

interface Props {}

/**
 * Alternatives:
 * https://codepen.io/supah/pen/BjYLdW
 * https://codepen.io/msisto/pen/LntJe
 * https://codepen.io/noeldelgado/pen/Bkzlu
 */
export function Spinner(props: Props) {
  return <ThemedSpinner {...props} />;
}

const ThemedSpinner = styled.div`
  width: ${props => props.theme.text.fontSize};
  height: ${props => props.theme.text.fontSize};
  /* margin: ${props => props.theme.text.fontSize}; */
  border-radius: 50%;
  border: 0.2rem solid rgba(151, 159, 208, 0.3);
  border-top-color: inherit;
  -webkit-animation: 1s spin infinite linear;
  animation: 1s spin infinite linear;
  /* .multi {
    border-bottom-color: ${props => props.theme.screenContrastColor};
  } */
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
`;
