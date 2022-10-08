<template>
  <section class="contact">
    <Container>
      <Title prefix="04.">Get In Touch</Title>
      <div class="card">
        <ScrollAnimation
          :from="{ opacity: 0, y: 100 }"
          :to="{ opacity: 1, y: 0, stagger: .25, delay: .6 }"
        >
          <div>
            <p>
              Although I’m not currently looking for any new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi, I’ll try my
              best to get back to you!
            </p>
          </div>
          <div>
            <a href="#" class="btn btn-primary">Say Hello!</a>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  </section>
</template>

<script>
import Title from "@/components/layout/title.vue";
import Container from "@/components/layout/container.vue";
import ScrollAnimation from "@/components/layout/scroll-animation.vue";

export default {
  name: "component-contact",
  components: {
    Title,
    Container,
    ScrollAnimation,
  },
};
</script>

<style lang="scss" scoped>
section.contact {
  padding: 1rem 0;
  background: rgb(var(--background));
  min-height: 480px;

  .card {
    margin: 0 auto;
    max-width: 640px;
    text-align: center;

    p {
      padding: 1rem 0;
    }
  }
}
</style>
