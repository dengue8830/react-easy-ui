import * as React from 'react';
import styled from 'styled-components';

interface Props {
  borderWidth?;
}

/**
 * Alternatives:
 * https://codepen.io/supah/pen/BjYLdW
 * https://codepen.io/msisto/pen/LntJe
 * https://codepen.io/noeldelgado/pen/Bkzlu
 */
export function Spinner(props: Props) {
  return <ThemedSpinner {...props} />;
}

Spinner.Container = styled.div`
  width: 18px;
  height: 18px;
`;

const ThemedSpinner = styled.div<Props>`
  /* Using css vars we can avoid taking the unit (px,rem,etc) into account. */
  --spinnerSize: ${props => props.theme.text.fontSize};
  width: var(--spinnerSize);
  height: var(--spinnerSize);
  border-radius: 50%;
  /**
   * Using rem unit produces the "white bite" bug.
   * https://stackoverflow.com/questions/60368267/css-white-bite-and-oval-form-in-spinner
   * Using calc we can make our spinner responsive to the size automagically.
   * BUG: If the calc results in some specific decimal value, the circle looks weird, like no full circle.
   * FIX: User should pass the correct value as props.
   */
  border: ${props => props.borderWidth || 'calc(var(--spinnerSize)/6)'} solid
    rgba(151, 159, 208, 0.3);
  border-top-color: inherit;
  animation: 1s spin infinite linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
