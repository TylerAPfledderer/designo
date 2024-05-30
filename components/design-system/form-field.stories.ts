import { FormField } from "#components";
import type { Meta, StoryObj } from "@storybook-vue/nuxt";
import { center } from "styled-system/patterns";
import { css } from "~/styled-system/css";

const meta = {
  title: "Field",
  decorators: [
    () => ({
      setup() {
        const decoratorStyle = center({
          backgroundColor: "primary",
          flexDirection: "column",
          gap: "6",
          px: "32",
          py: "16",
          width: "breakpoint-sm",
        });

        const otherStyles = css({
          "& [data-id='form-field']": {
            width: "full",
            maxW: "sm",
          },
        });
        return { decoratorStyle, otherStyles };
      },
      template: `<div data-id="form-field-decorator" :class="[decoratorStyle, otherStyles]" :style="otherStyles"><story /></div>`,
    }),
  ],
} satisfies Meta;

export default meta;

export const Field: StoryObj = {
  parameters: {
    pseudo: {},
  },
  render: () => ({
    components: { FormField },
    setup() {
      const fieldRef = ref();
      const filledInRef = ref();
      const emptyRef = ref();
      onMounted(() => {
        // Force the error message on render
        fieldRef.value.focus();
        fieldRef.value.blur();
      });
      return { fieldRef, filledInRef, emptyRef };
    },
    template: `
			<FormField #default="slotProps" :fieldRef="emptyRef">
            	<input ref="emptyRef" v-bind="slotProps" placeholder="Empty Form"/>
			</FormField>
			<FormField defaultValue="Filled In Form" :fieldRef="filledInRef" #default="slotProps">
				<input ref="filledInRef" v-bind="slotProps" placeholder="Empty form" />
			</FormField>
			<FormField :fieldRef="fieldRef" #default="slotProps" >
				<input type="email" ref="fieldRef" v-bind="slotProps" placeholder="Error State Form" />
			</FormField>
        `,
  }),
};
