<template>
  <div>
    <ScrollAnimation
      :from="{ opacity: 0, y: 100 }"
      :to="{ opacity: 1, y: 0, delay: 0.6 }"
    >
      <div class="card">
        <div class="card-body">
          <div class="card-img">
            <!-- <img v-if="theme === 'light'" src="@/assets/light/bam.png" /> -->
            <!-- <img v-if="theme === 'light'" src="@/assets/dark/bam.png" /> -->
            <img src="@/assets/dark/educate-magis.jpg" />
          </div>
          <div class="card-content">
            <div class="card-title">
              <h4>Educate Magis</h4>
            </div>
            <div class="card-description">
              <p>
                A web app for visualizing personalized Spotify data. View your top
                artists, top tracks, recently played tracks, and detailed audio
                information about each track.
              </p>
              <p>
                View your top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new playlists of
                recommended tracks based on your existing playlists and more.
              </p>
              <p>
                View your top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new playlists of
                recommended tracks based on your existing playlists.
              </p>
            </div>

            <p class="card-tags">
              React | Styled Components | Express | Spotify API | Heroku | Express |
              Spotify API | Heroku
            </p>
          </div>
        </div>
        <div class="card-footer">
          <div class="card-icons">
            <span><IconLink /></span>
            <span><IconGithub /></span>
          </div>
          <div>
            <a href="#" class="btn btn-primary" @click.prevent="showMore">Read More...</a>
          </div>
        </div>
      </div>
    </ScrollAnimation>

    <div ref="more" class="more">
      <h1>Educate Magis</h1>
      <img class="img-fluid rounded" src="@/assets/dark/educate-magis.jpg" />
    </div>
  </div>
</template>

<script>
import { ref, inject, onMounted } from "vue";

import { gsap } from "gsap";

import IconLink from "@carbon/icons-vue/es/earth/32";
import IconGithub from "@carbon/icons-vue/es/logo--github/32";
import ScrollAnimation from "@/components/layout/scroll-animation.vue";

export default {
  name: "component-card-project-featured",
  components: {
    IconLink,
    IconGithub,
    ScrollAnimation,
  },
  setup() {
    const more = ref(null);
    const tl = gsap.timeline({ paused: true });

    const theme = inject("theme");

    const showMore = () => {
      tl.totalProgress() === 1 ? tl.reverse() : tl.play();
    };

    onMounted(() => {
      tl.fromTo(
        more.value,
        {
          y: -100,
          height: 0,
        },
        {
          height: "auto",
          display: "block",
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power1.out",
        }
      );
    });

    return {
      more,
      theme,
      showMore,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 3rem;

  .card-body {
    display: grid;
    row-gap: 3rem;
    align-items: center;
    grid-template-columns: 1fr;

    .card-title h4 {
      margin: 0 0 1rem 0;
      color: rgb(var(--primary-500));
    }

    .card-img {
      text-align: center;
      img {
        width: 480px;
        max-width: 100%;
        border-radius: 0.8rem;
      }
    }

    p {
      margin-top: 0;
      margin-bottom: 0.8rem;
    }

    .card-description {
      z-index: 20;
      position: relative;
      background: rgba(var(--background), 0.95);
    }

    .card-tags {
      padding: 1rem 0;
      font-family: var(--font-mono);
      color: rgb(var(--primary-500));
    }
  }
  .card-footer {
    display: flex;
    padding: 1rem 0 0 0;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid rgba(var(--primary-500), 0.2);

    .card-icons {
      display: inline-block;
      color: rgb(var(--primary-500));
      > span {
        margin-right: 1rem;
      }
    }
    .more-toggle {
      display: flex;
      justify-content: flex-end;
    }
  }
}

@media (min-width: 768px) {
  .card {
    .card-body {
      row-gap: unset;
      column-gap: 6rem;
      grid-template-columns: 8fr 6fr;
      > div:nth-child(1) {
        order: 2;
      }
      > div:nth-child(2) {
        order: 1;
      }
    }
  }
}

.more {
  height: 0;
  opacity: 0;
  overflow: hidden;
  img {
    width: 600px;
  }
}
</style>
