<template>
  <div class="blinking-cursor" :class="{ active: blink }"></div>
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
  width: 6px;
  height: 16px;
  display: block;
  background-color: rgb(var(--foreground));
  transition: background-color 0.05s;
  line-height: 10px;
}
.blinking-cursor.active {
  background-color: transparent;
}
</style>
