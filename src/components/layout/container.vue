<template>
  <div class="container">
    <div class="row">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "component-container",
};
</script>

<style scoped lang="scss">
.container {
  margin: auto;
  max-width: 1200px;

  .row {
    margin: auto 3rem;
  }
}
</style>
