<template>
  <section class="projects">
    <Container>
      <Title prefix="03.">Projects</Title>
      <br />

      <ProjectFeatured v-for="i in [0, 0, 0]" :key="i" />

      <div class="mini-card-group">
        <ProjectMini v-for="i in [0, 0, 0, 0, 0, 0, 0, 0, 0]" :key="i" />
      </div>
    </Container>
  </section>
</template>

<script>
import Title from "@/components/layout/title.vue";
import ProjectFeatured from "@/components/layout/card-project-featured.vue";
import ProjectMini from "@/components/layout/card-project-mini.vue";
import Container from "@/components/layout/container.vue";

export default {
  name: "component-projects",
  components: {
    Title,
    Container,
    ProjectMini,
    ProjectFeatured,
  },
};
</script>

<style lang="scss" scoped>
section.projects {
  padding: 1rem 0;
  background: rgb(var(--background));
  min-height: 50vh;

  .mini-card-group {
    display: grid;
    row-gap: 2rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .mini-card-group {
      column-gap: 2rem;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>
