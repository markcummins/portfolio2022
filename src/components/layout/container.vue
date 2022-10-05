<template>
  <section>
    <div class="container">
      <div class="row">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "component-container",
};
</script>

<style scoped lang="scss">
section {
  background: rgb(var(--neutral-50));
  .container {
    margin: auto;
    max-width: 1200px;

    .row {
      margin: auto 3rem;
    }
  }
}
</style>
