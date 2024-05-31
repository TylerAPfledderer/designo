<script lang="ts" setup>
import { container } from "~/styled-system/patterns";
</script>
<template>
  <div :class="container({ maxW: '1111px', paddingInline: { md: '10' } })">
    <slot />
  </div>
</template>
