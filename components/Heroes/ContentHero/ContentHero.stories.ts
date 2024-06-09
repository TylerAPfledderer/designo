import type { Meta, StoryObj } from "@storybook-vue/nuxt";

import {
  ContentHero as ContentHeroComponent,
  PageContainer,
} from "#components";

const meta = {
  title: "Components / Heroes / ContentHero",
  component: ContentHeroComponent,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    () => ({
      components: { PageContainer },
      template: `<PageContainer><story/></PageContainer>`,
    }),
  ],
} satisfies Meta<typeof ContentHeroComponent>;

export default meta;

export const ContentHero: StoryObj<typeof meta> = {
  args: {
    title: "Web Design",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
  },
};
