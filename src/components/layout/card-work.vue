<template>
  <div class="card">
    <h3 class="card-title"><slot name="title" /></h3>
    <p>
      <span class="card-subtitle"><slot name="subtitle" /></span><br />
      <span class="card-meta"><slot name="meta" /></span>
    </p>
    <div class="card-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "component-card",
};
</script>

<style lang="scss" scoped>
.card {
  padding: 1.5rem;
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  border-radius: 0.3rem;
  color: rgb(var(--foreground));

  :deep(.card-title) {
    color: rgb(var(--primary-500));
    padding: 0.2rem 0.2rem 0.2rem 0.2rem;
    > span {
      color: rgb(var(--foreground));
      font-family: var(--font-mono);
    }
  }
  .card-subtitle {
    font-weight: 600;
    color: rgb(var(--primary-500));
  }

  .card-meta {
    font-family: var(--font-mono);
  }

  :deep(.card-content) {
    > div {
      display: flex;
      margin-bottom: 0.4rem;
      > div:nth-child(1) {
        color: rgb(var(--primary-500));
      }
      > div:nth-child(2) {
        margin-left: 1rem;
      }
    }
  }
}
</style>
