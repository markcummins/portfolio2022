<template>
  <div ref="el">
    <slot />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "component-scroll-animation",

  props: {
    from: {
      type: Object,
      required: true,
    },
    to: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const el = ref(null);
    const active = ref(false);

    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
      gsap.fromTo(
        props.to.stagger > 0 ? el.value.children : el.value,
        {
          ...props.from,
        },
        {
          scrollTrigger: {
            trigger: el.value,
            start: "top 80%",
            toggleActions: "play null null reverse",
          },
          ...props.to,
        }
      );
    });

    return {
      el,
      active,
    };
  },
};
</script>

<style scoped></style>
