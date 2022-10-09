<template>
  <section class="footer">
    <Container>
      <div class="footer-content">
        <div>
          <p><small>Site Designed and Built By Mark Cummins | 2022</small></p>
        </div>
        <div class="flag">
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from "@/components/layout/container.vue";

export default {
  name: "component-footer",
  components: {
    Container,
  },
};
</script>

<style lang="scss" scoped>
section.footer {
  background: rgb(var(--background));
  border-top: 1px solid rgba(var(--foreground), 0.2);

  .footer-content {
    padding: 0 0 0 0;
    text-align: center;
    font-family: var(--font-mono);
    color: rgb(var(--primary-500));

    p {
      margin: 0;
      padding: 0.8rem 0;
    }

    .flag {
      display: flex;
      justify-content: center;
      > div {
        display: flex;

        > div {
          width: 20px;
          height: 4px;
        }
        div:nth-child(1) {
          background: #009b48;
        }
        div:nth-child(2) {
          background: #ffffff;
        }
        div:nth-child(3) {
          background: #ff7900;
        }
      }
    }
  }
}
</style>
