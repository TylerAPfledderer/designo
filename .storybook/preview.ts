import type { Preview } from "@storybook/vue3";
import pandaPreset from "@pandacss/preset-panda";

import "../assets/css/global.css";

const defaultBreakpoints = pandaPreset.theme.breakpoints;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: Object.entries(defaultBreakpoints).reduce(
        (arr, curr) => {
          const [key, value] = curr;
          return {
            ...arr,
            [key]: {
              name: key,
              styles: {
                width: value,
                height: "800px",
              },
            },
          };
        },
        {
          base: {
            name: "base",
            styles: {
              width: "375px",
              height: "800px",
            },
          },
        },
      ),
    },
  },
};

export default preview;
