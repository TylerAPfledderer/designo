import type { Meta, StoryObj } from "@storybook-vue/nuxt";
import FontComponent from "./Font.vue";

const meta = {
  title: "Design System / Font",
  component: FontComponent,
} satisfies Meta<typeof FontComponent>;

export default meta;

export const Font: StoryObj<typeof meta> = {};
