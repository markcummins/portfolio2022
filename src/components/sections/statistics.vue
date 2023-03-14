<template>
  <RootSection class="statistics">
    <Container>
      <Title prefix="02.">Technologies</Title>

      <div class="stat-card stat-card-languages">
        <ScrollAnimation
          :from="{ opacity: 0, x: 240 }"
          :to="{ opacity: 1, x: 0, delay: 0.3 }"
        >
          <div class="stat-card-chart">
            <Radar :labels="languages.labels" :datasets="languages.datasets" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation :from="{ opacity: 0, y: 240 }" :to="{ opacity: 1, y: 0 }">
          <div class="stat-card-content">
            <div>
              <h3 class="text-primary"><Tag tag="h3"> Languages &amp; Scripts </Tag></h3>
              <p>
                <Tag tag="p">
                  I completed the
                  <a
                    href="https://www.ul.ie/gps/software-development-higher-diploma"
                    target="_blank"
                    >Graduate Diploma in Software Development</a
                  >
                  in 2013 at the University of Limerick, which is a full-time conversion
                  programme for non-ICT graduates wishing to enter the IT sector. That was
                  my main introduction to Software Development and we studied the
                  fundamentals, with a mix of theory and practical skills. The main
                  languages that were used were Java, ASP.NET, SQL and COBOL, and there
                  were also modules on UML (Unified Modeling Language) and Software
                  Testing.
                </Tag>
              </p>
              <p>
                <Tag tag="p">
                  After College, I was an intern for a few of months with the
                  <a href="https://www.localisation.ie/" taregt="_blank">
                    LRC (Localization Research Center)
                  </a>
                  in Limerick. This is where I really started to learn about Web
                  Development. Their site was built using Dart JS, PHP and the Twig
                  template engine.
                </Tag>
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
          <div class="stat-card-chart">
            <Radar :labels="frameworks.labels" :datasets="frameworks.datasets" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation :from="{ opacity: 0, y: 240 }" :to="{ opacity: 1, y: 0 }">
          <div class="stat-card-content">
            <div>
              <h3 class="text-primary">
                <Tag tag="h3"> Frameworks &amp; Platforms </Tag>
              </h3>
              <p>
                <Tag tag="p">
                  I Joined
                  <a
                    href="https://www.ilovelimerick.ie/bluechief-social-shows-promise-for-future/"
                    target="_blank"
                    >BlueChief</a
                  >
                  in December 2013. They were a small startup working on a number of PHP
                  Web Applications and Websites. We used CodeIgniter and jQuery Mobile for
                  the larger apps while using WordPress for some of the smaller projects.
                  After a few years, the company decided to focus more on their Social
                  Media business and began to pivot away from Software Development.
                </Tag>
              </p>
              <p>
                <Tag tag="p">
                  I began working with the
                  <a href="http://educatemagis.org/" target="_blank">Educate Magis</a>
                  team in 2015. I have had the opportunity to work on a wide range of
                  projects since then using many different frameworks and tools such as
                  Vue, Gatsby, Cypress, Docker, Flutter and many others.
                </Tag>
              </p>
              <p>
                <Tag tag="p">
                  The majority of the Development work is currently split between backend
                  development with PHP and frontend Development with Vue JS. The platform
                  is quite large now, and the main GitHub repository has over five
                  thousand commits. There is a good mix of developing and building new
                  features to the site &amp; maintaining all of the existing features.
                </Tag>
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation :from="{ opacity: 0, y: 240 }" :to="{ opacity: 1, y: 0 }">
        <GitHubStats />
      </ScrollAnimation>
    </Container>
  </RootSection>
</template>

<script>
import Tag from "@/components/layout/tag.vue";
import Title from "@/components/layout/title.vue";
import Radar from "@/components/components/radar.vue";
import GitHubStats from "@/components/components/github-stats.vue";
import Container from "@/components/layout/container.vue";
import RootSection from "@/components/layout/section-root.vue";
import ScrollAnimation from "@/components/layout/scroll-animation.vue";

export default {
  name: "component-statistics",
  components: {
    Tag,
    Radar,
    Title,
    Container,
    RootSection,
    GitHubStats,
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
        "ASP.Net",
        "Javascript",
        "PHP",
        "Cobol",
        "Go",
        "Java",
      ],
      datasets: [
        { data: [45, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { data: [0, 0, 45, 10, 0, 0, 0, 0, 0, 0, 0] },
        { data: [0, 0, 0, 0, 15, 15, 45, 45, 15, 15, 15] },
      ],
    };

    const frameworks = {
      labels: [
        // Scripts
        "WordPress",
        "Codeigniter",
        "Gatsby",
        // SysAdmin
        "Shell",
        "Docker",
        // Languages
        "Vue",
        "React",
        "Flutter",
        // Languages
        "TailWind",
        "BootStrap",
        "Foundation",
        // Testing
        "Cypress",
        "PHPUnit",
      ],
      datasets: [
        { data: [45, 15, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { data: [0, 0, 0, 25, 25, 0, 0, 0, 0, 0, 0, 0, 0] },
        { data: [0, 0, 0, 0, 0, 45, 20, 25, 0, 0, 0, 0, 0] },
        { data: [0, 0, 0, 0, 0, 0, 0, 0, 25, 45, 25, 0, 0] },
        { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 25] },
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
section.statistics {
  .stat-card {
    display: grid;
    row-gap: 1rem;
    grid-template-columns: 1fr;

    .stat-card-chart {
      width: 100%;
      max-width: 400px;
    }

    .stat-card-chart,
    .stat-card-content {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    .stat-card {
      row-gap: unset;
      column-gap: 3rem;
      grid-template-columns: 1fr 1fr;

      .stat-card-chart {
        max-width: unset;
      }

      .stat-card-chart,
      .stat-card-content {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .stat-card-frameworks {
      > div:nth-child(1) {
        order: 2;
      }
      > div:nth-child(2) {
        order: 1;
      }
    }
  }

  strong {
    color: rgb(var(--primary-500));
  }
}
</style>
