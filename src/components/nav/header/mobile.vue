<template>
  <div
    id="nav-top-mobile"
    :class="{ 'nav-hidden': scrollDirection === 'down', 'nav-active': isOpen }"
  >
    <div
      class="nav-menu-mobile-icon"
      :class="{ 'icon-open': !isOpen, 'icon-close': isOpen }"
    >
      <Transition name="slide-down">
        <IconMenu v-if="!isOpen" @click="toggleOpen" />
        <IconClose v-else-if="isOpen" @click="toggleOpen" />
      </Transition>
    </div>
    <div class="nav-menu-mobile-container" :class="{}">
      <div class="nav-menu-mobile-menu">
        <div>
          <div><span>01.</span> <strong>Technologies</strong></div>
          <div><span>02.</span> <strong>Work</strong></div>
          <div><span>03.</span> <strong>Projects</strong></div>
          <div><span>04.</span> <strong>Get In Touch</strong></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
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

      isOpen.value === true
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "scroll");
    };

    const currentScroll = ref(0);
    const scrollDirection = ref("");

    onMounted(() => {
      window.addEventListener("scroll", () => {
        scrollDirection.value = currentScroll.value > window.pageYOffset ? "up" : "down";
        currentScroll.value = window.pageYOffset;
      });
    });

    return {
      isOpen,
      toggleOpen,
      scrollDirection,
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

#nav-top-mobile {
  top: 0;
  left: 0;
  right: 0;
  z-index: 1020;
  position: fixed;

  .nav-menu-mobile-icon {
    top: 2rem;
    right: 2rem;
    z-index: 1040;
    cursor: pointer;
    position: absolute;
    transform: scale(1.2);
    transition: transform 0.2s ease-in-out;
  }

  &.nav-hidden > .nav-menu-mobile-icon.icon-open {
    transform: scale(0);
  }

  .nav-menu-mobile-container {
    z-index: 1030;
    opacity: 0;
    overflow: hidden;
    backdrop-filter: blur(0.4rem);
    transition: opacity 0.5s ease-in-out;
    .nav-menu-mobile-menu {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(var(--background), 0.8);

      div {
        font-size: 2.4rem;
        font-family: var(--font-sans);
        strong {
          color: rgb(var(--primary-500));
        }
        span {
          font-size: 2rem;
          font-family: var(--font-mono);
          font-family: var(--font-mono);
        }
      }
    }
  }

  &.nav-active {
    bottom: 0;
    .nav-menu-mobile-container {
      opacity: 1;
      position: absolute;

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
