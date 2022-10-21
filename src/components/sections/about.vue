<template>
  <RootSection class="about">
    <Container>
      <Title prefix="01.">About</Title>
      <ScrollAnimation :from="{ opacity: 0, y: 240 }" :to="{ opacity: 1, y: 0 }">
        <div class="about-content text-center">
          <div>
            <p>
              Hi, my name is Mark and I am a software developer from Ireland. Currently, I
              am working alongside a small team based in Galway called
              <a href="#section-projects"> Educate Magis</a>.
            </p>
            <p>
              I mainly focus on Developing and Deploying new features for the site, and my
              main strengths would be in Backend and Frontend Development. I also have
              picked up a lot of skills in other areas over the years, such as DevOps,
              Design, Software Testing, Database Management &amp; App Development.
            </p>
            <p>
              I think the mix of problem-solving and creativity appeals to me when it
              comes to programming. There is always a great satisfaction that comes with
              working on a big project and finally seeing it work for the first time, and
              then taking what you have learned on to the next project.
            </p>
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
