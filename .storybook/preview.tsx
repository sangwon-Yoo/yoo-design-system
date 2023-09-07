import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { GlobalStyle } from "../src/design-system/GlobalStyle";

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
    }),
  ],
};

export default preview;
