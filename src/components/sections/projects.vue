<template>
  <RootSection class="projects">
    <Container>
      <Title prefix="04.">Projects</Title>
      <br />

      <ProjectFeatured :read-more="true">
        <template v-slot:title>Educate Magis - Online Community</template>
        <template v-slot:img>
          <img src="@/assets/educate-magis.png" />
        </template>
        <template v-slot:content>
          <p>
            <a href="https://www.educatemagis.org/" target="_blank">Educate Magis</a> was
            launched in 2015 as an Online Community for Jesuit and Ignatian Educators. It
            connects a community of over 15,000 educators from over 800 Schools from all
            over the world.
          </p>
          <p>
            The
            <a href="https://www.educatemagis.org/" target="_blank">Educate Magis</a>
            platform allows Members to engage in Conversations and Groups, and also has an
            integration with Zoom, so educators can start and schedule online meetings.
            There is a LMS (Learner Management System) section where members can take
            courses. Click below to find out more...
          </p>
        </template>
        <template v-slot:tags
          >PHP | MySQL | ElasticSearch | Vue | React | WordPress | Docker | Bootstrap |
          Cypress | PhpUnit
        </template>
        <template v-slot:icons>
          <span>
            <a href="https://www.educatemagis.org/" target="_blank">
              <IconLink />
            </a>
          </span>
        </template>
        <template v-slot:more>
          <h2 class="text-primary">Educate Magis</h2>
          <p>
            Educate Magis is a global initiative that is dedicated to enabling an online
            community of Jesuit school educators. The overall mission is to nurture a
            vibrant online community connecting educators from Jesuit and Ignatian schools
            all around the world.
          </p>
          <p>
            Educators from Jesuit and Ignatian schools can register to be a member of the
            Educate Magis community and then avail of all the functionality in the online
            platform. Being a member of the Educate Magis community allows users to
            contact other community members, join groups of educators in similar networks,
            start and join discussions with other members, send requests to any schools
            they would like to collaborate with, and then access useful resources shared
            by the community.
          </p>
          <p>
            Members can also experience the community in a variety of different languages
            including English, French and Spanish.
          </p>
          <p>
            The Platform was launched in 2015 and as of 2022, there are around 15,000
            registered members on the platform
          </p>

          <br />
          <h4 class="text-primary">Online &amp; Printable Map</h4>

          <div>
            <div>
              <img class="img-fluid rounded" src="@/assets/educate-magis-map.jpg" />
            </div>
            <div>
              <p>
                The
                <a href="https://www.educatemagis.org/current-map/">Online Map</a>
                highlights all of the Jesuit Schools in the Network. The map data is
                synced with our database, so when a school is updated on the Website, the
                JSON data for the map markers will automatically be updated as well. The
                map makes use of
                <a href="https://www.mapbox.com/mapbox-gljs" target="_blank">MapBox</a>,
                and uses Layers to toggle between the
                <a href="https://www.feyalegria.co.uk/">Fe Y Alegria</a>,
                <a href="https://jrs.net/en/home/">JRS</a> and
                <a href="https://www.educatemagis.org/university-map/" target="_blank"
                  >Jesuit University</a
                >
                Markers.
              </p>

              <p>
                The Map has two versions, an
                <a href="https://www.educatemagis.org/current-map/">Online Version</a> and
                a
                <a href="https://www.educatemagis.org/printable-map/">Printable Version</a
                >, which is updated every year and used in many Jesuit Schools.
              </p>
              <p>
                The map has gone through many changes since the
                <a
                  href="https://www.alangeraghty.com/educate-magis#block-yui_3_17_2_1_1580762872763_18089"
                  target="_blank"
                  >original version</a
                >. The most recent addition has been the ability to
                <a
                  href="https://www.educatemagis.org/blogs/is-there-a-map-thats-accurate-new-map-projections-added-to-the-jgns-schools-interactive-map/"
                  target="_blank"
                  >toggle the projection</a
                >
                of the map.
              </p>
            </div>
          </div>

          <br />
          <h4 class="text-primary">Courses</h4>

          <div>
            <div>
              <img class="img-fluid rounded" src="@/assets/educate-magis-course.jpg" />
            </div>
            <div>
              <p>
                The LMS (Learner Management System) on Educate Magis allows members to
                take part in
                <a href="https://www.educatemagis.org/courses/" target="_blank"
                  >online courses</a
                >. Learners can take courses on their own, or as part of a Facilitated
                course. Learners can receive Certificates and Badges for completing
                Courses.
              </p>
              <p>
                The Core functionality of the LMS is provided by the
                <a href="https://senseilms.com/" target="_blank">Sensei LMS</a> plugin,
                and a custom plugin was built on top of this to provide extra features
                such as having Learner Notes, Resource and Syllabus Tabs, allowing the
                lesson content to be displayed in Slide format and having the ability to
                have mulitple comment threads in each lesson.
              </p>
            </div>
          </div>

          <br />
          <h4 class="text-primary">Meetings &amp; Connected Classes</h4>

          <div>
            <div>
              <img class="img-fluid rounded" src="@/assets/educate-magis-meetings.jpg" />
            </div>
            <div>
              <p>
                Educate Magis Members can also schedule meetings on the site through their
                profile, in their groups, or from the
                <a
                  href="https://www.educatemagis.org/connected-classrooms/"
                  target="_blank"
                  >Connected Classrooms</a
                >
                area. This allows them to connect for meetings, for remote teaching or for
                connecting their students with other students from different parts of the
                world
              </p>
              <p>
                Under the hood, we use the
                <a href="https://zoom.us/" target="_blank">Zoom</a> API to schedule and
                host the meetings, and there is a bridge layer that handles assigning our
                Zoom licences between members. This service was very active during the
                Pandemic, with over 5000 meetings, 90, 000 participants and just over 4
                Million meeting minutes in 2021.
              </p>
            </div>
          </div>

          <br />
          <h4 class="text-primary">Other Areas &amp; Features</h4>
          <div>
            <div>
              <img class="img-fluid rounded" src="@/assets/educate-magis.jpg" />
            </div>
            <div>
              <p>
                There alre many other areas on Educate Magis. In terms of resources, there
                are Documents, Videos, Keynotes, Photo Gallery, Podcast, Classroom
                Materials, Global Stories, Conversations, Schools, Reflections .etc.
              </p>
              <p>
                We added a
                <a href="http://educatemagis.org/?s=Education" target="_blank"
                  >custom search page</a
                >
                in 2018 to help users to find these resources, which uses
                <a href="https://www.elastic.co/elasticsearch/" target="_blank"
                  >ElasticSearch</a
                >
                for improved search results and for aggregating search results,and in
                2022, a new `<a
                  href="https://www.educatemagis.org/get-involved/"
                  target="_blank"
                  >Get Involved</a
                >` page was launched to help introduce and explain how Educators can use
                the site to learn and to collaborate. There are also many other individual
                pages and infographics on the site, like the
                <a
                  href="https://www.educatemagis.org/interactive-timeline/"
                  target="_blank"
                  >Contemporary Map of Jesuit Education</a
                >
                and the
                <a
                  href="https://www.educatemagis.org/infographic-integrated-perspective/"
                  target="_blank"
                  >Integrated Perspective</a
                >
                graphics for example.
              </p>
              <p>
                The Educate Magis platform has grown considerably over the years. There
                are End to End tests with Cypress that help with reliablilty, and a
                <a href="https://stats.uptimerobot.com/pKAN2T9qvZ" target="_blank"
                  >staus page</a
                >
                to help make sure everything is running reliably. We use
                <a href="https://patchstack.com/" target="_blank">PatchStack</a> to keep
                up to date with plugin vulnerabilities, and keep access log records and
                daily DB backups. You can learn more about Educate Magis
                <a href="https://www.educatemagis.org/about/" target="_blank">here</a>
              </p>
            </div>
          </div>
        </template>
      </ProjectFeatured>

      <ProjectFeatured :read-more="false">
        <template v-slot:title>BAM - VS Code Dark Theme</template>
        <template v-slot:img>
          <img src="@/assets/bam.png" />
        </template>
        <template v-slot:content>
          <p>
            Bam is a minimal, dark theme for VS Code which is available on the
            <a
              href="https://marketplace.visualstudio.com/items?itemName=mark-cummins.bam-dark-theme"
            >
              Visual Studio Marketplace </a
            >. The theme was inspired by the
            <a href="https://g-shock.co.uk/bamford/">G-Shock Bamford</a> watch, and was
            created using the
            <a href="https://github.com/microsoft/vscode-generator-code/"
              >VS Code Generator</a
            >
            package.
          </p>
          <p>
            My first editor was Dreamweaver, then Notepad++ which we used in college. I
            have gone through a host of other editors like Eclipse, Netbeans, Atom,
            Brackets .etc but I think
            <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
            is a fantastic editor because of how well supported it is and how customizable
            it is.
          </p>
          <p>
            Another awesome feature is how it integrates with
            <a href="https://github.com/" target="_blank">GitHub</a>, and pressing `.` at
            the root of any GitHub repository will not only open an online VS Code editor,
            but also set the preferences of the editor up for you.
          </p>
        </template>
        <template v-slot:tags>JS | NPM | GIT</template>
        <template v-slot:icons>
          <span>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=mark-cummins.bam-dark-theme"
              target="_blank"
            >
              <IconLink />
            </a>
          </span>
          <span>
            <a href="https://github.com/markcummins/Bam/" target="_blank">
              <IconGithub /> </a
          ></span>
        </template>
      </ProjectFeatured>

      <ProjectFeatured :read-more="false">
        <template v-slot:title>Primail - WordPress Plugin</template>
        <template v-slot:img>
          <img src="@/assets/primail.png" />
        </template>
        <template v-slot:content>
          <p>
            <a href="https://wordpress.org/plugins/primail/" target="_blank">Primail</a>
            is a WordPress plugin that allows you to send emails via
            <a href="https://mailchimp.com/features/transactional-email/" target="_blank"
              >MailChimp &amp; Mandrill</a
            >. Most hosting providers don't provide any good email client so an essential
            part of having any type of site that relies on emails is to set up an external
            email provider like SendGrid, Mailjet or Mandrill
          </p>
          <p>
            Although there are many existing plugins that allow you to connect to a
            service like this via the SMTP protocol, the Primail plugin is designed to
            integrate directly with the
            <a href="https://mailchimp.com/developer/transactional/api/" target="_blank"
              >Mandrill JSON API</a
            >, which makes it more reliable and much easier to extend and to take
            advantage of advanced functionality like Mandrill Tags and Templates for
            example.
          </p>
          <p>
            One nice feature of the plugin is that when a new update is published, There
            is an automated action setup to automatically run the PHPUnit tests that
            ensure that the plugin is still working
          </p>
        </template>
        <template v-slot:tags>PHP | PHPUnit | GitHub Actions | SVN</template>
        <template v-slot:icons>
          <span>
            <a href="https://wordpress.org/plugins/primail/" target="_blank">
              <IconLink />
            </a>
          </span>
          <span>
            <a href="https://github.com/markcummins/primail/" target="_blank">
              <IconGithub /> </a
          ></span>
        </template>
      </ProjectFeatured>

      <div class="mini-card-group">
        <ProjectMini>
          <template v-slot:img>
            <img class="img-fluid" src="@/assets/app.jpg" />
          </template>
          <template v-slot:title>Educate Magis App</template>
          <template v-slot:description>
            <p>
              The
              <a href="https://www.educatemagis.org/app/" target="_blank"
                >Educate Magis App</a
              >
              is a native iOS and Android app that integrates to the Educate Magis Website
              using the sites REST API for logging in and creating Forum Conversations and
              for Reading and Commenting on Blog Articles.
            </p>
            <p>
              The App was developed using Flutter, which allowed us to build one Native
              app for both Andriod and iOS, and the App takes advantage of native App
              Caching to allow it to function Offline.
            </p>
          </template>
          <template v-slot:tags>Flutter | Dart | REST | JWT | WordPress</template>
          <template v-slot:icons>
            <span>
              <a href="https://www.educatemagis.org/app/" target="_blank">
                <IconLink />
              </a>
            </span>
          </template>
        </ProjectMini>

        <ProjectMini>
          <template v-slot:img>
            <img class="img-fluid" src="@/assets/sharepoint.jpg" />
          </template>
          <template v-slot:title>ESPC 2017</template>
          <template v-slot:description>
            <p>
              <a href="https://www.sharepointeurope.com/" target="_blank"
                >ESPC is Europe's leading online community</a
              >, providing educational resources and encouraging collaboration. Each year
              ESPC gathers SharePoint, Office 365 &amp; Azure experts from around the
              world in one European location for the largest conference of its kind.
            </p>
            <p>
              In 2017, I worked with ESPC on the redesign and launch of their new WebSite.
              It included a scheduling system where atendee's could select the events that
              they wanted to attend, a mobile app and and a ticketing system for Members
              to purchase tickets to attend the conference.
            </p>
          </template>
          <template v-slot:tags>WooCommerce | Foundation | WordPress | PHP</template>
          <template v-slot:icons>
            <span>
              <a href="https://www.sharepointeurope.com/" target="_blank">
                <IconLink />
              </a>
            </span>
          </template>
        </ProjectMini>

        <ProjectMini>
          <template v-slot:img>
            <img class="img-fluid" src="@/assets/jogja.jpg" />
          </template>
          <template v-slot:title>JESEDU-Jogja 2020</template>
          <template v-slot:description>
            <p>
              <a href="https://jesedu-jogja2020.educatemagis.org/" target="_blank"
                >II COLLOQUIUM JESEDU-Jogja2020</a
              >
              was an international gathering for the leadership teams of Jesuit schools.
              Unfortunately the event was postponed due to the COVID-19 Pandemic.
            </p>
            <p>
              The microsite was created using Headless WordPress and
              <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a> and
              <a href="https://graphql.org/" target="_blank">GraphQL</a>. The site was
              hosted with
              <a href="https://aws.amazon.com/amplify/" target="_blank">AWS Amplify</a>
            </p>
            <p>
              The WordPress backend has a <i>'Rebuild'</i> function, which triggers
              Amplify to rebuild the site. The resulting site and assets are then compiled
              as static HTML, making it very lightweight and cheap to host.
            </p>
          </template>
          <template v-slot:tags>
            Gatsby | React | GraphQL | Tailwind | Amazon Amplify
          </template>
          <template v-slot:icons>
            <span>
              <a href="https://jesedu-jogja2020.educatemagis.org/" target="_blank">
                <IconLink />
              </a>
            </span>
          </template>
        </ProjectMini>

        <ProjectMini>
          <template v-slot:img>
            <img class="img-fluid" src="@/assets/global.jpg" />
          </template>
          <template v-slot:title>JESEDU-Global 2021</template>
          <template v-slot:description>
            <p>
              <a href="https://jesedu-global2021.educatemagis.org/" target="_blank"
                >II COLLOQUIUM JESEDU-Global2021</a
              >
              was a follow up to the postponed JESEDU-Jogja2020 gathering
            </p>
            <p>
              The microsite was created using the same foundation as the JESEDU-Jogja2020
              website, but it was given a fresh new design.
            </p>
            <p>
              The event moved from being in-person to being online, and a
              <a
                href="https://www.educatemagis.org/jesedu-global2021/colloquium-hub/"
                target="_blank"
                >seperate Hub area</a
              >
              was created on the parent website for participants to engage and participate
              in.
            </p>
          </template>
          <template v-slot:tags>
            Gatsby | React | GraphQL | Tailwind | Amazon Amplify
          </template>
          <template v-slot:icons>
            <span>
              <a href="https://jesedu-global2021.educatemagis.org/" target="_blank">
                <IconLink />
              </a>
            </span>
          </template>
        </ProjectMini>

        <ProjectMini>
          <template v-slot:img>
            <img class="img-fluid" src="@/assets/portfolio-2015.jpg" />
          </template>
          <template v-slot:title>Portfolio</template>
          <template v-slot:description>
            <p>
              My original Portfolio site was built in 2015. It showcased some of my work
              from 2013 to 2015.
            </p>
            <p>
              in 2022, I decided to revisit the site and to my surprise, it was still
              functioning and had some references to projects that I had worked on in the
              past, so I decided to rebuild the site and bring it up to date for 2022.
            </p>
          </template>
          <template v-slot:tags>CodeIgniter | MySQL | Gulp | Flask | Python</template>
          <template v-slot:icons>
            <span>
              <a href="#" target="_blank">
                <IconLink />
              </a>
            </span>
          </template>
        </ProjectMini>

        <ProjectMini>
          <template v-slot:img>
            <img class="img-fluid" src="@/assets/codepen.jpg" />
          </template>
          <template v-slot:title>CodePen Collection</template>
          <template v-slot:description>
            <p>
              I have created a lot of pens over the years on CodePen. It's a fantastic
              resource for inspiration and for quick prototypes.
            </p>
            <p>
              Most of the pens I have created are just that, quick prototypes that aren't
              finished, however I do have a collection of
              <a href="https://codepen.io/collection/ExwrQL" target="_blank">Featured</a>
              pens.
            </p>
            <p>
              Some of my favorites are an
              <a href="https://codepen.io/comminski/pen/zYjaKaN" target="_blank"
                >Atari Breakout Clone</a
              >, a
              <a href="https://codepen.io/comminski/pen/KKgxzzo" target="_blank"
                >Hangman</a
              >
              Game, and a list of
              <a href="https://codepen.io/comminski/pen/JQELOo" target="_blank"
                >CLI Commands</a
              >
              that I wanted to keep a record of. You can view the full collection
              <a href="https://codepen.io/collection/ExwrQL" target="_blank">here</a>.
            </p>
          </template>
          <template v-slot:tags>HTML | CSS | SCSS | JS | Vue | GSAP | Canvas</template>
          <template v-slot:icons>
            <span>
              <a href="https://codepen.io/collection/ExwrQL" target="_blank">
                <IconLink />
              </a>
            </span>
          </template>
        </ProjectMini>
      </div>
    </Container>
  </RootSection>
</template>

<script>
import { inject } from "vue";
import Title from "@/components/layout/title.vue";
import ProjectFeatured from "@/components/layout/card-project-featured.vue";
import ProjectMini from "@/components/layout/card-project-mini.vue";
import Container from "@/components/layout/container.vue";
import RootSection from "@/components/layout/section-root.vue";

import IconLink from "@carbon/icons-vue/es/earth/32";
import IconGithub from "@carbon/icons-vue/es/logo--github/32";

export default {
  name: "component-projects",
  components: {
    Title,
    Container,
    ProjectMini,
    RootSection,
    ProjectFeatured,

    IconLink,
    IconGithub,
  },

  setup() {
    const theme = inject("theme");

    return {
      theme,
    };
  },
};
</script>

<style lang="scss" scoped>
section.projects {
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
