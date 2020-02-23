import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Theme, ButtonColor } from 'types/appThemeTypes';

interface Props {
  onClick?: () => void;
  isPrimary?: boolean;
  isDisabled?: boolean;
  isOutline?: boolean;
  isLoading?: boolean;
  style?: React.CSSProperties;
  children?: any;
}

export function Button(props: Props) {
  const theme = React.useContext(ThemeContext);
  const buttonColor = getTheme(props, theme);
  return <ThemedButton {...props} buttonColor={buttonColor} />;
}
/** Just shorcuts. */
Button.Left = styled.div`
  position: absolute;
  left: 10%;
`;
Button.Right = styled.div`
  position: absolute;
  right: 10%;
`;
/** Just a fancy fix to inherit css rule, especially for Spinner when it have no wrap. */
Button.Content = styled.div``;

const ThemedButton = styled.button<{ buttonColor: ButtonColor }>`
  outline: 0;
  width: 100%;
  height: 32px;
  border-radius: 10px;
  background-color: ${props => props.buttonColor.background};
  border: solid 1px ${props => props.buttonColor.border};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* Text/content styles */
  font-size: ${props => props.theme.text.fontSize};
  font-family: ${props => props.theme.text.fontFamily};
  color: ${props => props.buttonColor.contrast};
  font-weight: 400;
  letter-spacing: 0.14px;
  /**
   * Position relative allows us to align second and third elements
   * to the borders using position absolute without going outside the button.
   */
  position: relative;
`;

function getTheme(props: Props, theme: Theme): ButtonColor {
  let type: 'outline' | 'normal' = props.isOutline ? 'outline' : 'normal';
  if (props.isDisabled) {
    return theme.components.button[type].idle.disabled;
  }
  let color: 'primary' | 'default' = props.isPrimary ? 'primary' : 'default';
  return theme.components.button[type].idle.normal[color];
}
