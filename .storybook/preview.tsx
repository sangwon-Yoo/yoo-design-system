import type { Preview } from "@storybook/react";
import { GlobalStyle } from "@/design-system/GlobalStyle";

const preview: Preview = {
  parameters : {
    actions : { argTypesRegex: "^on[A-Z].*" },
    controls : {
      matchers : {
        color : /(background|color)$/i,
        date : /Date$/,
      },
    },
  },
  /*decorators : [
      withTh({
          GlobalStyles, // Adds your GlobalStyle component to all stories
      })
  ],*/
};

export default preview;
