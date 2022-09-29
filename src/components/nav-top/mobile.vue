<template>
  <div id="nav-top-mobile">
    <div class="nav-menu-mobile-icon">
      <Transition name="slide-down">
        <IconMenu v-if="isOpen" @click="toggleOpen" />
        <IconClose v-else-if="!isOpen" @click="toggleOpen" />
      </Transition>
    </div>
    <div class="nav-menu-mobile-container" :class="{ active: isOpen }">
      <div class="nav-menu-mobile-menu">
        <div>
          <div>1. About</div>
          <div>1. About</div>
          <div>1. About</div>
          <div>1. About</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import IconMenu from "@carbon/icons-vue/es/menu/32";
import IconClose from "@carbon/icons-vue/es/close/32";

export default {
  name: "nav-mobile",
  components: {
    IconMenu,
    IconClose,
  },

  setup() {
    const isOpen = ref(true);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleOpen,
    };
  },
};
</script>

<style lang="scss" scoped>
.slide-down-enter-active {
  transition: all 0.25s ease-out;
}
.slide-down-leave-active {
  display: none;
}
.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.nav-menu-mobile-icon {
  top: 0rem;
  right: 0rem;
  z-index: 1020;
  padding: 1.2rem;
  cursor: pointer;
  position: fixed;
  transform: scale(1.2);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.6);
  }
}

.nav-menu-mobile-container {
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  opacity: 0;
  z-index: 1010;
  overflow: hidden;
  position: fixed;
  backdrop-filter: blur(0.4rem);
  transition: opacity 0.5s ease-in-out, height 0.3s ease-in-out;

  &.active {
    opacity: 1;
    height: 100vh;
    .nav-menu-mobile {
      transform: translateX(0);
    }
  }

  .nav-menu-mobile-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    > div {
      font-size: 3rem;
    }
  }
}
</style>
