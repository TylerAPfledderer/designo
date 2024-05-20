<script setup lang="ts">
import type { ColorToken } from "styled-system/tokens";
import { grid, square, vstack } from "styled-system/patterns";
import { token } from "~/styled-system/tokens";

const palleteData: { name: string; value: ColorToken }[] = [
  { name: "Primary", value: "primary" },
  { name: "Black", value: "black" },
  { name: "White", value: "white" },
  { name: "Primary Light", value: "primary.light" },
  { name: "Dark Gray", value: "gray.dark" },
  { name: "Light Gray", value: "gray.light" },
];
</script>

<template>
  <div :class="grid({ columns: 3 })">
    <div v-for="{ name, value } in palleteData" :key="value" :class="vstack()">
      <div
        :class="square({ size: '20' })"
        :style="{ background: token.var(`colors.${value}`) }"
      />
      <span>{{ name }}</span>
    </div>
  </div>
</template>
