<template>
  <RootSection class="about">
    <Container>
      <Title prefix="01.">About</Title>
      <ScrollAnimation :from="{ opacity: 0, y: 240 }" :to="{ opacity: 1, y: 0 }">
        <div class="about-content">
          <div>
            <p>
              Hello! My name is Mark and I am a Software Developer from Ireland. I first
              started learning HTML in college while studing Audio Production, and I
              started taking more of an interest in programming from there. In 2012, I
              decided to enroll in the Graduate Diploma in Computing, and over the last
              ten years...
            </p>
            <p>...</p>
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  </RootSection>
</template>

<script>
import Title from "@/components/layout/title.vue";
import Container from "@/components/layout/container.vue";
import RootSection from "@/components/layout/section-root.vue";
import ScrollAnimation from "@/components/layout/scroll-animation.vue";

export default {
  name: "Component-About",
  components: {
    Title,
    Container,
    RootSection,
    ScrollAnimation,
  },
};
</script>

<style lang="scss" scoped>
div.about-content {
  display: flex;
  justify-content: center;
  > div {
    max-width: 600px;
  }
}
</style>
