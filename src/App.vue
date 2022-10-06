<template>
  <AppShell>
    <NavTop />
    <HeaderMap />
    <Statistics />
    <Work />
    <Projects />
    <Contact />
    <Footer />
  </AppShell>
</template>

<script>
import { ref, provide } from "vue";
import AppShell from "./components/app-shell.vue";
import NavTop from "./components/nav/header/nav.vue";
import Footer from "./components/nav/footer/nav.vue";

import Work from "./components/sections/work.vue";
import Contact from "./components/sections/contact.vue";
import Projects from "./components/sections/projects.vue";
import HeaderMap from "./components/sections/header-map.vue";
import Statistics from "./components/sections/statistics.vue";

export default {
  name: "App",
  components: {
    Work,
    Footer,
    NavTop,
    Contact,
    AppShell,
    Projects,
    HeaderMap,
    Statistics,
  },
  setup() {
    const theme = ref("dark");

    provide("theme", theme);
    provide("switchTheme", () => {
      theme.value = theme.value === "dark" ? "light" : "dark";
    });

    return {
      theme,
    };
  },
};
</script>
