import type { Meta, StoryObj } from "@storybook-vue/nuxt";
import { Button } from "#components";
import { css, cx } from "~/styled-system/css";
import { token } from "~/styled-system/tokens";
import { vstack, center } from "~/styled-system/patterns";

const meta = {
  title: "Design System / Buttons",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

export const Buttons: StoryObj<typeof meta> = {
  parameters: {
    pseudo: {
      hover: ["#light", "#dark"],
    },
  },
  render: () => ({
    components: { Button },
    setup() {
      const btnStackDark = vstack({ bg: "primary" });
      const btnStackLight = vstack({ bg: "gray.light" });

      const defaultBtnStack = (pattern?: string) =>
        cx(
          pattern,
          css({ paddingInline: "32", paddingBlock: "10", borderRadius: "lg" }),
        );

      const wrapperStyles = center({ gap: "2" });

      return {
        wrapperStyles,
        vstack,
        center,
        btnStackDark,
        defaultBtnStack,
        css,
        btnStackLight,
        token,
      };
    },
    template: `
    <div :class="wrapperStyles">
      <div :class="defaultBtnStack(btnStackDark)">
        <span :style="{color: token.var('colors.white'), fontWeight: token.var('fontWeights.bold')}">Button on dark</span>
        <div :class="vstack()">
          <Button hasDarkParent>Learn More</Button>
          <Button id="dark">Learn More</Button>
        </div>
      </div>
      <div :class="defaultBtnStack(btnStackLight)">
        <span :style="{fontWeight: token.var('fontWeights.bold')}">Button on dark</span>
        <div :class="vstack()">
          <Button>Learn More</Button>
          <Button id="light" hasDarkParent>Learn More</Button>
        </div>
      </div>
    </div>
    `,
  }),
};
