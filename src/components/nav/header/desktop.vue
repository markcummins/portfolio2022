<template>
  <div id="nav-top-desktop" :class="{ 'nav-hidden': scrollDirection === 'down' }">
    <div>
      <div>
        <span>1. Technologies</span>
        <span>2. Work</span>
        <span>3. Projects</span>
        <span>4. Get In Touch</span>
      </div>
      <Transition name="fade">
        <IconDark class="icon-theme" v-if="theme === 'dark'" @click="switchTheme()" />
        <IconLight
          class="icon-theme"
          v-else-if="theme === 'light'"
          @click="switchTheme()"
        />
      </Transition>
    </div>
  </div>
</template>

<script>
import { inject, ref, onMounted } from "vue";

import IconLight from "@carbon/icons-vue/es/asleep/32";
import IconDark from "@carbon/icons-vue/es/asleep--filled/32";

export default {
  name: "nav-desktop",

  components: {
    IconDark,
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
.fade-enter-active {
  transition: all 0.25s ease-out;
}
.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  display: none;
}

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
    justify-content: flex-end;
    backdrop-filter: blur(0.3rem);
    background: rgba(var(--background), 0.1);
    border-bottom: 1px solid rgba(var(--foreground), 0.2);
    transition: box-shadow 0.15s ease-in-out, transform 0.2s ease-in-out;

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
