<template>
  <AppShell>
    <NavTop />
    <HeaderMap />
    <Statistics />
  </AppShell>
</template>

<script>
import { ref, provide } from "vue";
import AppShell from "./components/app-shell.vue";
import NavTop from "./components/nav-top/nav.vue";
import Statistics from "./components/statistics/statistics.vue";
import HeaderMap from "./components/header-map.vue";

export default {
  name: "App",
  components: {
    NavTop,
    AppShell,
    Statistics,
    HeaderMap,
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
