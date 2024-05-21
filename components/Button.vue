<script setup lang="ts">
import { button } from "~/styled-system/recipes";

const props = defineProps<{ hasDarkParent?: boolean }>();
</script>
<template>
  <button v-if="props.hasDarkParent" :class="button()">
    <slot />
  </button>
  <button v-else :class="button({ visual: 'dark' })">
    <slot />
  </button>
</template>
