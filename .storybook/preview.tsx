import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { GlobalStyle } from "../src/design-system/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { YooBlogTheme } from "../src/design-system/themes";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    // Adds global styles and theme switching support.
    withThemeFromJSXProvider({
      GlobalStyles : GlobalStyle,
      themes : {
        lightTheme : YooBlogTheme
      },
      defaultTheme : 'lightTheme',
      Provider : ThemeProvider
    }),
  ],
};

export default preview;
