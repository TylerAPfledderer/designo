import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import FontComponent from './Font.vue'

const meta = {
  title: 'Font',
} satisfies Meta

export default meta

export const Font: StoryObj = {
  render: () => ({
    components: { FontComponent },
    template: `<FontComponent />`,
  }),
}
