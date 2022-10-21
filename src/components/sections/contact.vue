<template>
  <RootSection class="contact">
    <Container>
      <Title prefix="05.">Get In Touch</Title>
      <div class="card">
        <ScrollAnimation
          :from="{ opacity: 0, y: 100 }"
          :to="{ opacity: 1, y: 0, stagger: 0.25, delay: 0.6 }"
        >
          <div>
            <p>
              Feel free to reach out to me on EMail. Whether you have a question or just
              want to
              <strong class="font-labelle text-primary"><u>say hello</u></strong> &amp;
              I’ll try my best to get back to you!
            </p>
          </div>
          <div>
            <a href="mailto:markcumminsdev@gmail.com" class="btn btn-primary">Contact</a>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  </RootSection>
</template>

<script>
import Title from "@/components/layout/title.vue";
import Container from "@/components/layout/container.vue";
import RootSection from "@/components/layout/section-root.vue";
import ScrollAnimation from "@/components/layout/scroll-animation.vue";

export default {
  name: "component-contact",
  components: {
    Title,
    Container,
    RootSection,
    ScrollAnimation,
  },
};
</script>

<style lang="scss" scoped>
section.contact {
  .card {
    margin: 0 auto;
    max-width: 520px;
    text-align: center;

    p {
      padding: 1rem 0;
    }
  }
}
</style>
