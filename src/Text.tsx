import * as React from 'react';
import styled from 'styled-components';

interface Props {}

export function Text(props: Props) {
  return <StyledText {...props} />;
}

const StyledText = styled.label`
  /*
   * This would be replaced with a global css set
   * in order to prevent massive rules duplication
   * in pages with a lot of texts.
   */
  font-size: ${props => props.theme.text.fontSize};
  font-family: ${props => props.theme.text.fontFamily};
  color: ${props => props.theme.screenContrastColor};
`;
