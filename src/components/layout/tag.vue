<template>
  <span class="tag" :data-tag="tag">
    <slot></slot>
  </span>
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

<style lang="scss" scoped>
.tag {
  position: relative;
}
.tag:before,
.tag:after {
  margin: 0;
  scale: 0.9;
  font-weight: 300;
  position: absolute;
  font-family: var(--font-labelle);
  color: rgba(var(--primary-500), 0.25);
}

.tag:before {
  top: -1.2rem;
  right: calc(100% + 0.45rem);
  content: "<" attr(data-tag) ">";
}
.tag:after {
  bottom: -1.2rem;
  left: calc(100% + 0.45rem);
  content: "<" attr(data-tag) "/>";
}
</style>
