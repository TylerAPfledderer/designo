import type { Meta, StoryObj } from "@storybook-vue/nuxt";
import { Colors as ColorsComponent } from "#components";

const meta = {
  title: "Colors",
  component: ColorsComponent,
} satisfies Meta<typeof ColorsComponent>;

export default meta;

export const Colors: StoryObj<typeof meta> = {};
