<template>
  <section class="footer">
    <Container>
      <div class="footer-content">
        <div>
          <p>
            <small style="margin-bottom: 0.2rem">
              Site Designed and Built By
              <strong class="font-labelle"><u>Mark Cummins</u></strong>
            </small>
            <small
              >Check out the
              <i class="font-mono">
                [<a
                  href="https://github.com/markcummins/portfolio2022/settings"
                  target="_blank"
                  >source code</a
                >]
              </i>
            </small>
          </p>
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
  .footer-content {
    padding: 0 0 0 0;
    text-align: center;
    color: rgb(var(--primary-500));

    p {
      margin: 0;
      padding: 0.8rem 0;
      small {
        display: block;

        a {
          border-bottom: 1px solid rgb(var(--primary-500));
        }
      }
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
