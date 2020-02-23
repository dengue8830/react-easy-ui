import * as React from 'react';
import { ThemeProvider } from '../../src/ThemeProvider';
import { generateTheme } from './exampleStyle';

interface IProps {}

export function ExampleThemedProvider(props: IProps) {
  return (
    <ThemeProvider
      theme={generateTheme({
        theme: 'white',
        primaryColor: 'teal',
        contrastPrimaryColor: 'white'
      })}
      {...props}
    />
  );
}
