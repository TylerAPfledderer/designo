import { Navigation as NavigationComponent, PageContainer } from "#components";
import type { Meta, StoryObj } from "@storybook-vue/nuxt";

const meta = {
  title: "Navigation",
  component: NavigationComponent,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    () => ({
      components: { PageContainer },
      template: `<PageContainer><story/></PageContainer>`,
    }),
  ],
} satisfies Meta<typeof NavigationComponent>;

export default meta;

export const Navigation: StoryObj<typeof meta> = {};
