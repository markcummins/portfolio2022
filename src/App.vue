<template>
  <div>
    <Head>
      <title>Mark Cummins</title>
      <body :class="`theme-${theme}`" />
      <meta
        name="description"
        content="Hi, my name is Mark and I am a software developer from Ireland who specializes in creating web apps and great online experiences"
      />
      <meta name="image" content="https://www.mark-cummins.com/static/og.png" />
      <meta property="og:title" content="Mark Cummins" />
      <meta
        property="og:description"
        content="Hi, my name is Mark and I am a software developer from Ireland who specializes in creating web apps and great online experiences"
      />
      <meta property="og:image" content="https://www.mark-cummins.com/static/og.png" />
      <meta property="og:url" content="https://www.mark-cummins.com/" />
      <meta property="og:type" content="website" />
      <meta
        name="keywords"
        content="php developer remote, full-stack web developer portiflio, front-end web developer, full-stack software developer, "
      />
    </Head>
    <NavTop />
    <HeaderMap />
    <About id="section-about" />
    <Statistics id="section-stats" />
    <Work id="section-work" />
    <Projects id="section-projects" />
    <Contact id="section-contact" />
    <Footer />
  </div>
</template>

<script>
import { Head } from "@vueuse/head";
import { ref, provide } from "vue";
import NavTop from "./components/nav/header/nav.vue";
import Footer from "./components/nav/footer/nav.vue";

import Work from "./components/sections/work.vue";
import About from "./components/sections/about.vue";
import Contact from "./components/sections/contact.vue";
import Projects from "./components/sections/projects.vue";
import HeaderMap from "./components/sections/header-map.vue";
import Statistics from "./components/sections/statistics.vue";

export default {
  name: "App",
  components: {
    Head,
    Work,
    About,
    Footer,
    NavTop,
    Contact,
    Projects,
    HeaderMap,
    Statistics,
  },
  setup() {
    const theme = ref("dark");
    const themePrefix = "theme";

    provide("theme", theme);
    provide("switchTheme", () => {
      theme.value = theme.value === "dark" ? "light" : "dark";
    });

    return {
      theme,
      themePrefix,
    };
  },
};
</script>

<style lang="scss">
@import "~@/style/mapbox-gl.css";
@import "~@/style/fonts.css";
@import "~@/style/keyframes.css";
@import "~@/style/app.css";
</style>
