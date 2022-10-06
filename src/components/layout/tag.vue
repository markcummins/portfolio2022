<template>
  <pre>&lt;{{ tag }}&gt;</pre>
  <slot></slot>
  <pre>&lt;/{{ tag }}&gt;</pre>
</template>

<script>
export default {
  name: "component-tag",
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
pre {
  margin: 0;
  scale: 0.9;
  font-weight: 300;
  display: inline-block;
  font-family: var(--font-labelle);
  color: rgba(var(--primary-500), 0.5);
}
</style>
