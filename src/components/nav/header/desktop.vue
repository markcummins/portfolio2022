<template>
  <div id="nav-top-desktop" :class="{ 'nav-hidden': scrollDirection === 'down' }">
    <div>
      <div>
        <img v-if="theme === 'dark'" src="@/assets/dark/logo.svg" />
        <img v-if="theme === 'light'" src="@/assets/light/logo.svg" />
      </div>
      <div>
        <div>
          <span>1. Technologies</span>
          <span>2. Work</span>
          <span>3. Projects</span>
          <span>4. Get In Touch</span>
        </div>
        <IconLight class="icon-theme" @click="switchTheme()" />
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref, onMounted } from "vue";

import IconLight from "@carbon/icons-vue/es/asleep/32";

export default {
  name: "nav-desktop",

  components: {
    IconLight,
  },

  setup() {
    const theme = inject("theme");
    const switchTheme = inject("switchTheme");

    const currentScroll = ref(0);
    const scrollDirection = ref("");

    onMounted(() => {
      window.addEventListener("scroll", () => {
        scrollDirection.value = currentScroll.value > window.pageYOffset ? "up" : "down";
        currentScroll.value = window.pageYOffset;
      });
    });

    return {
      theme,
      switchTheme,
      currentScroll,
      scrollDirection,
    };
  },
};
</script>

<style scoped lang="scss">
#nav-top-desktop {
  &.nav-hidden > div {
    transform: translateY(-100%);
    box-shadow: 0 0 0 0 rgb(var(--background));
  }

  > div {
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    position: fixed;
    font-size: 1rem;
    padding: 1rem 2rem;
    transform: translateY(0%);
    justify-content: space-between;
    backdrop-filter: blur(0.3rem);
    background: rgba(var(--background), 0.1);
    border-bottom: 1px solid rgba(var(--foreground), 0.2);
    transition: box-shadow 0.15s ease-in-out, transform 0.2s ease-in-out;

    > div {
      display: flex;
      justify-content: space-between;

      img {
        width: 3.2rem;
        height: auto;
      }

      > div {
        display: flex;
        margin-right: 2rem;

        span {
          height: 32px;
          display: flex;
          cursor: pointer;
          align-items: center;
          margin: 0 0.6rem;
          text-transform: uppercase;
          border-top: 2px solid transparent;
          border-bottom: 2px solid transparent;
          transition: border 0.15s ease-in-out, padding 0.15s ease-in-out;
          &:hover {
            padding: 0 0.8rem;
            color: rgb(var(--primary-500));
            border-bottom: 2px solid rgb(var(--primary-500));
          }
        }
      }
    }
  }

  .icon-theme {
    cursor: pointer;
    transition: scale 0.15s ease-in-out, color 0.15s ease-in-out;

    &:hover {
      scale: 1.4;
      color: rgb(var(--primary-500));
    }
  }
}
</style>
