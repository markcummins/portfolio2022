<template>
  <section class="work">
    <Container>
      <Title prefix="02.">Work</Title>
      <div>
        <br />
      </div>
      <!-- <h3>Educate Magis | Galway</h3>
      <h4>PHP WEB APPLICATION DEVELOPER</h4>
      <h4>May 2015 – Present</h4>
      <p>@todo...</p> -->

      <!-- <h3>BlueChief Solutions, Limerick</h3>
      <h4>PHP WEB APPLICATION DEVELOPER</h4>
      <h4>DECEMBER 2013 – FEBRUARY 2015</h4>
      <p>
        Developing, testing and deploying in-house and commercial PHP web applications.
        Developing CMS websites using Wordpress
      </p> -->

      <ScrollAnimation
        :from="{ opacity: 0, x: 80 }"
        :to="{ opacity: 1, x: 0, duration: 1 }"
      >
        <Card>
          <template v-slot:title>LRC (Localization Research Center) Limerick</template>
          <template v-slot:subtitle>SOFTWARE DEVELOPMENT INTERNSHIP</template>
          <template v-slot:meta>SEPTEMBER 2013 – DECEMBER 2013</template>
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
        :from="{ opacity: 0, x: -80 }"
        :to="{ opacity: 1, x: 0, duration: 1 }"
      >
        <Card>
          <template v-slot:title>LRC (Localization Research Center) Limerick</template>
          <template v-slot:subtitle>SOFTWARE DEVELOPMENT INTERNSHIP</template>
          <template v-slot:meta>SEPTEMBER 2013 – DECEMBER 2013</template>
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
        :from="{ opacity: 0, rotationX: -100, transformOrigin: '100% 0%', x: 80 }"
        :to="{ opacity: 1, rotationX: 0, x: 0, duration: 1 }"
      >
        <Card>
          <template v-slot:title>LRC (Localization Research Center) Limerick</template>
          <template v-slot:subtitle>SOFTWARE DEVELOPMENT INTERNSHIP</template>
          <template v-slot:meta>SEPTEMBER 2013 – DECEMBER 2013</template>
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

      <!-- <h3>University of Limerick, Plassey Technological Park, Limerick.</h3>
      <h4>GRADUATE DIPLOMA IN COMPUTING (LEVEL 9 )</h4>
      <h4>AUGUST 2012 - MAY 2013</h4>
      <p>@todo...</p> -->
    </Container>
  </section>
</template>

<script>
import Title from "@/components/layout/title.vue";
import Card from "@/components/layout/card-work.vue";
import Container from "@/components/layout/container.vue";
import ScrollAnimation from "@/components/layout/scroll-animation.vue";

import ListItem from "@carbon/icons-vue/es/x-axis/16";

export default {
  name: "component-work",
  components: {
    Card,
    Title,
    ListItem,
    Container,
    ScrollAnimation,
  },
};
</script>

<style lang="scss" scoped>
section.work {
  padding: 1rem 0;
  background: rgb(var(--background));
  min-height: 50vh;
}
</style>
