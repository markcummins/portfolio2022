<template>
  <div id="nav-top-desktop" :class="{ 'nav-hidden': scrollDirection === 'down' }">
    <div>
      <div>
        <img v-if="theme === 'dark'" alt="Logo" src="@/assets/logo-dark.svg" />
        <img v-if="theme === 'light'" alt="Logo" src="@/assets/logo-light.svg" />
      </div>
      <div>
        <div>
          <a class="nav-link" href="#section-about"
            ><small> <span>01.</span> About</small>
          </a>
          <a class="nav-link" href="#section-stats"
            ><small> <span>02.</span> Technologies</small>
          </a>
          <a class="nav-link" href="#section-work"
            ><small> <span>03.</span> Work</small>
          </a>
          <a class="nav-link" href="#section-projects"
            ><small> <span>04.</span> Projects</small>
          </a>
          <a class="nav-link" href="#section-contact"
            ><small> <span>05.</span> Get In Touch</small>
          </a>
          <a
            :href="publicPath + 'static/Resume%20-%20Mark%20Cummins.pdf'"
            target="_blank"
            class="nav-resume"
          >
            <small>Résumé</small>
          </a>
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
        scrollDirection.value =
          window.pageYOffset < 200 || currentScroll.value > window.pageYOffset
            ? "up"
            : "down";
        currentScroll.value = window.pageYOffset;
      });
    });

    return {
      theme,
      switchTheme,
      currentScroll,
      scrollDirection,
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style scoped lang="scss">
#nav-top-desktop {
  &.nav-hidden > div {
    transform: translateY(-100%);
  }

  > div {
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    position: fixed;
    padding: 1rem 2rem;
    transform: translateY(0%);
    justify-content: space-between;
    backdrop-filter: blur(0.3rem);
    background: rgba(var(--background), 0.1);
    border-bottom: 1px solid rgba(var(--primary-500), 0.5);
    transition: transform 0.2s ease-in-out;

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

        a {
          height: 32px;
          display: flex;
          cursor: pointer;
          margin: 0 0.6rem;
          align-items: center;
          font-family: var(--font-mono);
          transition: border 0.15s ease-in-out, color 0.15s ease-in-out,
            scale 0.15s ease-in-out, padding 0.15s ease-in-out;
        }

        a.nav-link {
          color: rgb(var(--foreground));
          span {
            color: rgb(var(--primary-500));
          }
          &:hover {
            scale: 1.1;
            padding: 0 0.3rem;
            color: rgb(var(--primary-500));
          }
        }

        a.nav-resume {
          padding: 0 0.8rem;
          border-radius: 0.2rem;
          color: rgb(var(--primary-500));
          border: 1px solid rgb(var(--primary-500));
          &:hover {
            background: rgb(var(--primary-500));
            border: 1px solid rgb(var(--primary-500));
            color: rgb(var(--background));
          }
        }
      }
    }
  }

  .icon-theme {
    cursor: pointer;
    transition: scale 0.15s ease-in-out, color 0.15s ease-in-out;

    &:hover {
      scale: 1.3;
      color: rgb(var(--primary-500));
    }
  }
}
</style>
