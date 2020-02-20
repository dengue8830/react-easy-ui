import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface IProps {
  theme;
}

export function ThemeProvider(props: IProps) {
  return <StyledThemeProvider {...props} />;
}
