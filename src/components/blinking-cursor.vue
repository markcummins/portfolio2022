<template>
  <span class="blinking-cursor" :class="{ active: blink }">|</span>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  props: {
    repeat: {
      type: Number,
      required: false,
      default: 1000,
    },
  },
  setup(props) {
    const blink = ref(false);
    const interval = ref();

    onMounted(() => {
      interval.value = setInterval(() => {
        blink.value = !blink.value;
      }, props.repeat);
    });

    onUnmounted(() => {
      clearInterval(interval.value);
    });

    return {
      blink,
    };
  },
};
</script>

<style>
.blinking-cursor {
  color: inherit;
}
.blinking-cursor.active {
  color: transparent;
}
</style>
