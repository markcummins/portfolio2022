<template>
  <div>
    <ScrollAnimation
      :from="{ opacity: 0, y: 100 }"
      :to="{ opacity: 1, y: 0, delay: 0.6 }"
    >
      <div class="card">
        <div class="card-body">
          <div class="card-img">
            <slot name="img" />
          </div>
          <div class="card-content">
            <div class="card-title">
              <h4>
                <slot name="title" />
              </h4>
            </div>
            <div class="card-description">
              <slot name="content" />
            </div>

            <p class="card-tags">
              <slot name="tags" />
            </p>
          </div>
        </div>
        <div class="card-footer">
          <div class="card-icons">
            <slot name="icons" />
          </div>
          <div>
            <a v-if="readMore" href="#" class="btn btn-primary" @click.prevent="showMore"
              >Read More...</a
            >
          </div>
        </div>
      </div>
    </ScrollAnimation>

    <div ref="more" class="more">
      <div>
        <slot name="more" />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ref, onMounted } from "vue";

import ScrollAnimation from "@/components/layout/scroll-animation.vue";

export default {
  name: "component-card-project-featured",
  components: {
    ScrollAnimation,
  },

  props: {
    readMore: {
      type: Boolean,
      required: true,
    },
  },

  setup() {
    const more = ref(null);
    const tl = gsap.timeline({ paused: true });

    const showMore = () => {
      tl.totalProgress() === 1 ? tl.reverse() : tl.play();
    };

    onMounted(() => {
      tl.fromTo(
        more.value,
        {
          y: 300,
          height: 0,
        },
        {
          y: 0,
          opacity: 1,
          height: "auto",
          duration: 0.35,
          display: "block",
          ease: "circ.inOut",
          marginBottom: "2rem",
        }
      );
    });

    return {
      more,
      showMore,
    };
  },
};
</script>

<style lang="scss" scoped>
:deep(.card) {
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
      line-height: 1.4rem;
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

  > div {
    padding: 3rem;
    border-radius: 0.8rem;
    margin-bottom: 2rem;
    background: rgb(var(--background-tint));

    :deep(> div) {
      display: grid;
      column-gap: 3rem;
      align-items: center;
      grid-template-columns: 1fr;

      @media (min-width: 768px) {
        grid-template-columns: 4fr 2fr;
        > div:nth-child(1) {
          order: 2;
        }
        > div:nth-child(2) {
          order: 1;
        }
      }
    }
  }
}
</style>
