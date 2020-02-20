import 'styled-components';
import { Theme } from './appThemeTypes';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
