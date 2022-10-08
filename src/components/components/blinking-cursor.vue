<template>
  <span class="blinking-cursor" :class="{ active: blink }"></span>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  props: {
    repeat: {
      type: Number,
      required: false,
      default: 500,
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
  width: 8px;
  display: block;
  height: 16px;
  background-color: rgb(var(--foreground));
  transition: background-color 0.05s;
}
.blinking-cursor.active {
  background-color: transparent;
}
</style>
