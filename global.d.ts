import { Parameters } from "@storybook-vue/nuxt";

declare module "@storybook-vue/nuxt" {
  interface Parameters {
    // For `storybook-addon-pseudo-states`
    pseudo?: Partial<
      Record<
        | "active"
        | "hover"
        | "focus"
        | "focusVisible"
        | "focusWithin"
        | "visited"
        | "link"
        | "target",
        true | string[]
      >
    >;
  }
}
