<template>
  <ScrollAnimation :from="{ opacity: 0, y: 100 }" :to="{ opacity: 1, y: 0, delay: 0.3 }">
    <div class="title">
      <div>
        <h2 style="text-align: center" class="text-primary">
          <span class="font-mono text-foreground">
            {{ prefix }}
          </span>
          <slot />
        </h2>
      </div>
    </div>
  </ScrollAnimation>
</template>

<script>
import ScrollAnimation from "@/components/layout/scroll-animation.vue";

export default {
  name: "component-title",

  components: {
    ScrollAnimation,
  },

  props: {
    prefix: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  z-index: 20;
  display: flex;
  position: relative;
  justify-content: center;

  &:before {
    left: 0;
    right: 0;
    top: 48%;
    content: "";
    z-index: 10;
    position: absolute;
    border-bottom: 2px solid rgba(var(--primary-500), 0.2);
  }

  > div {
    position: relative;
    z-index: 24;
    background-color: rgb(var(--background));

    h2 {
      padding: 0 2rem;
      display: inline-block;
    }
    h2 span {
      margin-right: 1rem;
    }
  }
}
</style>
