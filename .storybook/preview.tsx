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
  decorators : [
      (Story) => (
          <GlobalStyle>
            {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
            <Story />
          </GlobalStyle>
      ),
  ],
};

export default preview;
