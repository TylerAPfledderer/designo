import type { Meta, StoryObj } from "@storybook-vue/nuxt";
import ColorsComponent from "./Colors.vue";

const meta = {
  title: "Colors",
  component: ColorsComponent,
} satisfies Meta<typeof ColorsComponent>;

export default meta;

export const Colors: StoryObj<typeof meta> = {};
