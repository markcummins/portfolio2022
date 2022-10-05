<template>
  <Container>
    <div class="statistics">
      <ScrollAnimation
        :from="{ opacity: 0, y: 100 }"
        :to="{ opacity: 1, y: 0, delay: 0.3 }"
      >
        <div>
          <h1 style="text-align: center" class="text-primary">
            <Tag tag="h1"> Languages and Frameworks </Tag>
          </h1>
        </div>
      </ScrollAnimation>

      <div class="stat-card stat-card-languages">
        <ScrollAnimation
          :from="{ opacity: 0, x: 240 }"
          :to="{ opacity: 1, x: 0, delay: 0.3 }"
        >
          <div><Radar :labels="languages.labels" :datasets="languages.datasets" /></div>
        </ScrollAnimation>
        <ScrollAnimation :from="{ opacity: 0, y: 240 }" :to="{ opacity: 1, y: 0 }">
          <div class="stat-card-content">
            <div>
              <h3 class="text-primary"><Tag tag="h3"> Languages / Scripts </Tag></h3>
              <p>
                <Tag tag="p">
                  I started out studying <strong>Java</strong> in college. At the time, it
                  was seen as a language that would only grow in popularity. We also
                  studied <strong>SQL</strong> and <strong>COBOL</strong>.
                </Tag>
              </p>
              <p>
                <Tag tag="p">
                  When I finished college, I worked for a couple of startups that focused
                  on Web Development and <strong>JavaScript</strong> &amp;
                  <strong>PHP</strong>
                </Tag>
              </p>
              <p>
                <Tag tag="p"> .etc .etc .etc </Tag>
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div class="stat-card stat-card-frameworks">
        <ScrollAnimation
          :from="{ opacity: 0, x: 240 }"
          :to="{ opacity: 1, x: 0, delay: 0.3 }"
        >
          <div><Radar :labels="frameworks.labels" :datasets="frameworks.datasets" /></div>
        </ScrollAnimation>
        <ScrollAnimation :from="{ opacity: 0, y: 240 }" :to="{ opacity: 1, y: 0 }">
          <div class="stat-card-content">
            <div>
              <h3 class="text-primary"><Tag tag="h3"> Frameworks / Platforms </Tag></h3>
              <p>
                <Tag tag="p">
                  Over the last nine years, I have had the opportunity to work with many Frameworks and Platforms. 
                  I have worked a lot with <strong>WordPress</strong> where I have built a lot of custom Plugins 
                </Tag>
              </p>
              <p>
                <Tag tag="p"> .etc .etc .etc </Tag>
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </Container>
</template>

<script>
import Tag from "@/components/layout/tag.vue";
import Radar from "@/components/statistics/radar.vue";
import Container from "@/components/layout/container.vue";
import ScrollAnimation from "@/components/layout/scroll-animation.vue";

export default {
  name: "component-statistics",
  components: {
    Tag,
    Radar,
    Container,
    ScrollAnimation,
  },

  setup() {
    const languages = {
      labels: [
        // Scripts
        "HTML",
        "CSS/SCSS",
        // DB
        "MySQL",
        "ElasticSearch",
        // Languages
        "Python",
        "Shell",
        "ASP.Net/VB.Net",
        "Javascript",
        "PHP",
        "Cobol",
        "Go",
        "Java",
      ],
      datasets: [
        { color: "0,255,  0", data: [45, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { color: "255, 0, 0", data: [0, 0, 45, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { color: "138, 198, 232", data: [0, 0, 0, 0, 15, 25, 15, 45, 45, 15, 15, 15] },
      ],
    };

    const frameworks = {
      labels: [
        // Scripts
        "WordPress",
        "Gatsby",
        "Codeigniter",
        "Docker",
        // Languages
        "React",
        "Vue",
        "Flutter",
        // Languages
        "BootStrap",
        "TailWind",
        "Foundation",
      ],
      datasets: [
        { color: "138, 198, 232", data: [15, 15, 15, 0, 0, 0, 0, 0, 0, 0] },
        { color: "255, 0, 0", data: [0, 0, 0, 25, 25, 25, 0, 0, 0, 0] },
        { color: "0,255,  0", data: [0, 0, 0, 0, 0, 0, 0, 25, 25, 25] },
      ],
    };

    return {
      languages,
      frameworks,
    };
  },
};
</script>

<style lang="scss" scoped>
.statistics {
  background: rgb(var(--neutral-50));
  padding: 1rem 0;

  .stat-card {
    display: grid;
    column-gap: 3rem;
    grid-template-columns: 12fr 12fr;

    div.stat-card-content {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }

  strong {
    color: rgb(var(--primary-500));
  }

  .stat-card-frameworks > div:nth-child(1) {
    order: 2;
  }
  .stat-card-frameworks > div:nth-child(2) {
    order: 1;
  }
}
</style>
