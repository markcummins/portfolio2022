<template>
  <ScrollAnimation
    :from="{ opacity: 0, y: 100 }"
    :to="{ display: 'flex', opacity: 1, y: 0, delay: 0 }"
  >
    <div class="card">
      <img class="img-fluid" src="@/assets/dark/educate-magis.jpg" />
      <div class="content">
        <div class="card-title">
          <h4>Educate Magis</h4>
        </div>
        <div class="card-description">
          <p>
            A web app for visualizing personalized Spotify data. View your top artists,
            top tracks, recently played tracks.
          </p>
          <p v-if="Math.random() < 0.5">
            View your top artists, top tracks, recently played tracks, and detailed audio
            information about each track.
          </p>
        </div>
        <p class="card-tags">
          React | Styled Components | Express | Spotify API | Heroku | Express | Spotify
          API | Heroku
        </p>

        <p class="card-icons">
          <span><IconLink /></span>
          <span><IconGithub /></span>
        </p>
      </div>
    </div>
  </ScrollAnimation>
</template>

<script>
import { inject } from "vue";

import IconLink from "@carbon/icons-vue/es/earth/24";
import IconGithub from "@carbon/icons-vue/es/logo--github/24";
import ScrollAnimation from "@/components/layout/scroll-animation.vue";

export default {
  name: "component-card-project-mini",
  components: {
    IconLink,
    IconGithub,
    ScrollAnimation,
  },
  setup() {
    const theme = inject("theme");

    return {
      theme,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  overflow: hidden;
  border-radius: 0.25rem;
  flex-direction: column;
  background: rgb(var(--background-tint));

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem 0 1.5rem;

    .card-title {
      padding: 1rem 0 0 0;
      color: rgb(var(--primary-500));
    }
    .card-description {
      flex-grow: 1;
    }

    .card-tags {
      margin: 0;
      padding: 1rem 0;
      font-family: var(--font-mono);
      color: rgb(var(--primary-500));
      border-top: 2px solid rgba(var(--primary-500), 0.2);
    }

    .card-icons {
      margin: 0;
      display: flex;
      padding: 0.8rem 0;
      color: rgb(var(--primary-500));
      > span {
        margin-right: 1rem;
      }
    }
  }
}
</style>
