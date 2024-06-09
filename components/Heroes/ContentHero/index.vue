<script setup lang="ts">
import { flex, center } from "~/styled-system/patterns";

defineProps<{
  title: string;
  description: string;
}>();

const HERO_CHUNK_NAME = "hero";
</script>
<template>
  <div
    :data-id="`${HERO_CHUNK_NAME}-root`"
    :class="
      center({
        borderRadius: { md: 'xl' },
        bgImage: {
          base: 'url(/assets/images/bg-pattern-design-pages-intro-mobile.svg)',
          md: 'url(/assets/images/bg-pattern-design-pages-intro-tablet.svg)',
        },
        bgPosition: { base: 'right top', md: 'right' },
        bgRepeat: 'no-repeat',
        bgColor: 'primary',
        h: { base: 'xs', md: '64' },
        px: '6',
        textAlign: 'center',
      })
    "
  >
    <div
      :data-id="`${HERO_CHUNK_NAME}-text`"
      :class="
        flex({
          color: 'white',
          flexDirection: 'column',
          gap: 'ms-1',
        })
      "
    >
      <h1>{{ title }}</h1>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>
