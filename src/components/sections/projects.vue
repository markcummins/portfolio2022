<template>
  <section class="projects">
    <Container>
      <Title prefix="03.">Projects</Title>
    </Container>
  </section>
</template>

<script>
import Title from "@/components/layout/title.vue";
import Container from "@/components/layout/container.vue";

export default {
  name: "component-projects",
  components: {
    Title,
    Container,
  },
};
</script>

<style lang="scss" scoped>
section.projects {
  padding: 1rem 0;
  background: rgb(var(--background));
  min-height: 50vh;
}
</style>
