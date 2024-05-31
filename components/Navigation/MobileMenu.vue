<script lang="ts" setup>
import { css } from "styled-system/css";
import { flex, hstack } from "styled-system/patterns";
import CloseIcon from "assets/icons/icon-close.svg?component";
import HamburgerIcon from "assets/icons/icon-hamburger.svg?component";

defineProps({
  navLinkList: {
    type: Array as PropType<Array<{ label: string; link: string }>>,
    required: true,
  },
  navBarRef: {
    type: Object as PropType<HTMLElement | null>,
    required: true,
  },
});

const MOBILE_NAV_MENU = "mobile-nav-menu";

const menuOpen = ref(false);
</script>
<template>
  <div :class="hstack()">
    <button
      :aria-expanded="menuOpen"
      :aria-controls="MOBILE_NAV_MENU"
      @click="menuOpen = !menuOpen"
    >
      <HamburgerIcon v-if="!menuOpen" />
      <CloseIcon v-else />
    </button>
    <div
      v-if="menuOpen"
      :class="
        css({
          position: 'absolute',
          left: 0,
          width: 'full',
          bg: 'black/50',
        })
      "
      :style="{
        top: `${navBarRef?.offsetHeight}px`,
        height: `calc(100vh - ${navBarRef?.offsetHeight}px)`,
      }"
    >
      <nav
        :class="
          css({
            textTransform: 'uppercase',
            color: 'white',
            fontSize: 'lg',
            bg: 'black',
            px: '6',
            py: '12',
          })
        "
      >
        <ul
          :id="MOBILE_NAV_MENU"
          :class="flex({ direction: 'column', gap: '8' })"
        >
          <li v-for="item in navLinkList" :key="JSON.stringify(item)">
            <NuxtLink :to="item.link">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
