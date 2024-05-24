import '@emotion/react';
import { Theme as CustomTheme } from './theme.def';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}