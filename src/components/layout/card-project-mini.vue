<template>
  <ScrollAnimation
    :from="{ opacity: 0, y: 100 }"
    :to="{ display: 'flex', opacity: 1, y: 0, delay: 0 }"
  >
    <div class="card">
      <div class="card-img">
        <slot name="img" />
      </div>
      <div class="content">
        <div class="card-title">
          <h4><slot name="title"></slot></h4>
        </div>
        <div class="card-description">
          <slot name="description"></slot>
        </div>
        <p class="card-tags">
          <slot name="tags"></slot>
        </p>

        <p class="card-icons">
          <slot name="icons"></slot>
        </p>
      </div>
    </div>
  </ScrollAnimation>
</template>

<script>
import { inject } from "vue";
import ScrollAnimation from "@/components/layout/scroll-animation.vue";

export default {
  name: "component-card-project-mini",
  components: {
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
      padding: .8rem 0;
      line-height: 1.4rem;
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
