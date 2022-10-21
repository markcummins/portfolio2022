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
    <div class="nav-menu-mobile-container">
      <div class="nav-menu-mobile-menu">
        <div>
          <div>
            <h2>
              <a href="#section-about" @click="close()"><span>01.</span> About</a>
            </h2>
          </div>
          <div>
            <h2>
              <a href="#section-stats" @click="close()"><span>02.</span> Technologies</a>
            </h2>
          </div>
          <div>
            <h2>
              <a href="#section-work" @click="close()"><span>03.</span> Work</a>
            </h2>
          </div>
          <div>
            <h2>
              <a href="#section-projects" @click="close()"><span>04.</span> Projects</a>
            </h2>
          </div>
          <div>
            <h2>
              <a href="#section-contact" @click="close()"><span>05.</span> Contact</a>
            </h2>
          </div>
          <div>
            <h2>
              <a
                :href="publicPath + 'static/Resume%20-%20Mark%20Cummins.pdf'"
                @click="close()"
                ><span>&nbsp;&nbsp;.</span> Résumé</a
              >
            </h2>
          </div>
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
    const isOpen = ref(false);

    const toggleOpen = () => {
      isOpen.value === true ? close() : open();
    };

    const open = () => {
      isOpen.value = true;
      document.body.style.overflow = "hidden";
    };

    const close = () => {
      isOpen.value = false;
      document.body.style.overflow = "";
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
      close,
      isOpen,
      toggleOpen,
      scrollDirection,
      publicPath: process.env.BASE_URL,
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

  height: 0;
  transition: opacity 0.25s ease-out, height 0.25s ease-out;

  &.nav-active {
    height: 100%;
    .nav-menu-mobile-container {
      opacity: 1;
    }
  }

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
    position: absolute;
    backdrop-filter: blur(0.4rem);
    transition: opacity 0.5s ease-in-out;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

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

      > div {
        display: flex;
        row-gap: 0.8rem;
        flex-direction: column;

        h2 a {
          color: rgb(var(--foreground));

          span {
            margin-right: 0.8rem;
            font-family: var(--font-mono);
            color: rgb(var(--primary-500));
          }
        }
      }
    }
  }
}
</style>
