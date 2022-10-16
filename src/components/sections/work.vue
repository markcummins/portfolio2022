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
          <template v-slot:subtitle>Full stack Web Developer</template>
          <template v-slot:meta>May 2015 – Present</template>
          <template v-slot:content>
            <p style="margin-bottom: 0.2rem">
              <strong>Responsibilities</strong>
            </p>
            <div>
              <div><ListItem /></div>
              <div></div>
            </div>
            <div>
              <div><ListItem /></div>
              <div>...</div>
            </div>
            <div>
              <div><ListItem /></div>
              <div>...</div>
            </div>
            <div>
              <div><ListItem /></div>
              <div>...</div>
            </div>
            <div>
              <div><ListItem /></div>
              <div>...</div>
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
          <template v-slot:subtitle>Full stack Web Developer</template>
          <template v-slot:meta>September 2013 – February 2015</template>
          <template v-slot:content>
            <p style="margin-bottom: 0.2rem">
              <strong>Responsibilities</strong>
            </p>
            <div>
              <div><ListItem /></div>
              <div>
                Developing, testing and deploying in-house and commercial PHP web
                applications.
              </div>
            </div>
            <div>
              <div><ListItem /></div>
              <div>Developing CMS websites using Wordpress.</div>
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
          <template v-slot:subtitle>Software Development Internship</template>
          <template v-slot:meta>September 2013 – December 2013</template>
          <template v-slot:content>
            <p style="margin-bottom: 0.2rem">
              <strong>Responsibilities</strong>
            </p>
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
            <p style="margin-bottom: 0.2rem">
              <strong>Key Themes and Subjects</strong>
            </p>
            <div>
              <div><ListItem /></div>
              <div>Software Testing &amp; Inspection</div>
            </div>
            <div>
              <div><ListItem /></div>
              <div>Leveraging legacy applications</div>
            </div>
            <div>
              <div><ListItem /></div>
              <div>Business orientated programming languages</div>
            </div>
            <div>
              <div><ListItem /></div>
              <div>Information systems development</div>
            </div>
            <div>
              <div><ListItem /></div>
              <div>Information modeling &amp; specification.</div>
            </div>
          </template>
        </Card>
      </ScrollAnimation>

      <!-- <h3>University of Limerick, Plassey Technological Park, Limerick.</h3>
      <h4>GRADUATE DIPLOMA IN COMPUTING (LEVEL 9 )</h4>
      <h4>AUGUST 2012 - MAY 2013</h4>
      <p>@todo...</p> -->
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
