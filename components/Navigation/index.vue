<script lang="ts" setup>
import { css } from "~/styled-system/css";
import { hstack } from "~/styled-system/patterns";

import { MobileMenu } from "#components";

const navBarRef = ref<HTMLElement | null>(null);

const navLinkList: Array<{ label: string; link: string }> = [
  { label: "Our company", link: "/our-company" },
  { label: "Locations", link: "/locations" },
  { label: "Contact", link: "/contact" },
];

const { isSmaller } = usePandaBreakpoints();
onMounted(() => {
  nextTick();
});
</script>
<template>
  <div
    ref="navBarRef"
    :class="
      hstack({ justify: 'space-between', px: { base: '6', md: 0 }, py: '9' })
    "
  >
    <div :class="css({ w: '202px' })">
      <img alt="" src="~/assets/images/logo-dark.png" />
    </div>
    <MobileMenu
      v-if="isSmaller('md')"
      :nav-bar-ref="navBarRef"
      :nav-link-list="navLinkList"
    />
    <nav v-else>
      <ul
        :class="
          hstack({
            textTransform: 'uppercase',
            fontSize: 'sm',
            letterSpacing: '2px',
            gap: '10',
          })
        "
      >
        <li v-for="item in navLinkList" :key="JSON.stringify(item)">
          <NuxtLink :to="item.link">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
