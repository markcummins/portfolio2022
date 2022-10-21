<template>
  <RootSection class="work">
    <Container>
      <Title prefix="03.">Work</Title>
      <div>
        <br />
      </div>
      <ScrollAnimation
        :from="{ opacity: 0, x: 80 }"
        :to="{ opacity: 1, x: 0, duration: 1 }"
      >
        <Card>
          <template v-slot:title> <span>2015.</span> Educate Magis</template>
          <template v-slot:subtitle>Software Developer</template>
          <template v-slot:meta>May 2015 – Present</template>
          <template v-slot:content>
            <div>
              <div><ListItem /></div>
              <div>
                Responsible for the Development, Maintenance &amp; Deployment of the
                Educate Magis Platforms and Apps across multiple different technology
                stacks.
              </div>
            </div>
            <div>
              <div><ListItem /></div>
              <div>
                Writing modern maintainable &amp; robust code that integrates and connects
                with other plugins and APIs.
              </div>
            </div>
            <div>
              <div><ListItem /></div>
              <div>
                Working with a range of different programming languages such as PHP,
                Javascript, Vue, Flutter, React, Gatsby, MySQl, Cypress, ElasticSearch.
              </div>
            </div>
            <div>
              <div><ListItem /></div>
              <div>
                Communicating, Collaborating and Project Management alongside a
                multi-disciplinary team on a range of different projects and tasks.
              </div>
            </div>
          </template>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation
        :from="{ opacity: 0, x: 80 }"
        :to="{ opacity: 1, x: 0, duration: 1 }"
      >
        <Card>
          <template v-slot:title> <span>2013.</span> BlueChief Solutions</template>
          <template v-slot:subtitle>Web Application Developer</template>
          <template v-slot:meta>September 2013 – February 2015</template>
          <template v-slot:content>
            <div>
              <div><ListItem /></div>
              <div>
                Develop bespoke Web applications alongside a small team of developers
                using CodeIgniter, PHP, MySQL and jQuery Mobile
              </div>
            </div>
            <div>
              <div><ListItem /></div>
              <div>Develop and build websites for in-house clients using WordPress</div>
            </div>
          </template>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation
        :from="{ opacity: 0, x: -80 }"
        :to="{ opacity: 1, x: 0, duration: 1 }"
      >
        <Card>
          <template v-slot:title>
            <span>2013.</span> Localization Research Center
          </template>
          <template v-slot:subtitle>Web Application Developer </template>
          <template v-slot:meta>September 2013 – December 2013</template>
          <template v-slot:content>
            <div>
              <div><ListItem /></div>
              <div>Developing &amp; testing the SOLAS match website.</div>
            </div>
            <div>
              <div><ListItem /></div>
              <div>
                Preparing for the localization of the website into different languages.
              </div>
            </div>
          </template>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation
        :from="{ opacity: 0, x: 80 }"
        :to="{ opacity: 1, x: 0, duration: 1 }"
      >
        <Card>
          <template v-slot:title>
            <span>2012.</span> Graduate Diploma in Computing
          </template>
          <template v-slot:subtitle>University of Limerick</template>
          <template v-slot:meta>August 2012 – May 2013</template>
          <template v-slot:content>
            <div>
              <div><ListItem /></div>
              <div>Graduated with First Class Honors</div>
            </div>
            <div>
              <div><ListItem /></div>
              <div>
                Key Themes and Subjects: Information Systems Development,Information
                Modeling, Software Testing &amp; Inspection, Database Management, Software
                Engineering
              </div>
            </div>
          </template>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation
        :from="{ opacity: 0, x: 80 }"
        :to="{ opacity: 1, x: 0, duration: 1 }"
      >
        <Card>
          <template v-slot:title>
            <span>2011.</span> Honors Degree in Video Production
          </template>
          <template v-slot:subtitle>Limerick Institute of Technology</template>
          <template v-slot:meta>August 2011 – May 2012</template>
          <template v-slot:content>
            <div>
              <div><ListItem /></div>
              <div>Graduated with First Class Honors</div>
            </div>
            <div>
              <div><ListItem /></div>
              <div>
                Key Themes and Subjects: Audio &amp; Video Production, Internet Media
                Technology, Communications &amp; Networks
              </div>
            </div>
          </template>
        </Card>
      </ScrollAnimation>
    </Container>
  </RootSection>
</template>

<script>
import Title from "@/components/layout/title.vue";
import Card from "@/components/layout/card-work.vue";
import Container from "@/components/layout/container.vue";
import RootSection from "@/components/layout/section-root.vue";
import ScrollAnimation from "@/components/layout/scroll-animation.vue";

import ListItem from "@carbon/icons-vue/es/x-axis/16";

export default {
  name: "component-work",
  components: {
    Card,
    Title,
    ListItem,
    Container,
    RootSection,
    ScrollAnimation,
  },
};
</script>

<style lang="scss" scoped>
section.work {
}
</style>
