<template>
  <div>
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
import { ref, provide, onMounted } from "vue";
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
      const currentTheme = theme.value;
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      document.body.classList.remove(`${themePrefix}-${currentTheme}`);
      document.body.classList.add(`${themePrefix}-${newTheme}`);

      theme.value = theme.value === "dark" ? "light" : "dark";
    });

    onMounted(() => {
      document.body.classList.add(`${themePrefix}-${theme.value}`);
    });

    return {
      theme,
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
