<template>
  <div id="app-shell" :style="{ ...themes[theme] }">
    <slot />
    <div style="background: #0f3; height: 100vh"></div>
    <div style="background: #f30; height: 100vh"></div>
    <div style="background: #03f; height: 100vh"></div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "AppShell",

  setup() {
    const theme = inject("theme");

    const themes = {
      light: {
        "--neutral-50": "250, 250, 250",
        "--neutral-100": "245, 245, 245",
        "--neutral-200": "238, 238, 238",
        "--neutral-300": "224, 224, 224",
        "--neutral-400": "189, 189, 189",
        "--neutral-500": "158, 158, 158",
        "--neutral-600": "117, 117, 117",
        "--neutral-700": "97, 97, 97",
        "--neutral-800": "66, 66, 66",
        "--neutral-900": "33, 33, 33",
      },
      dark: {
        "--neutral-50": "33, 33, 33",
        "--neutral-100": "66, 66, 66",
        "--neutral-200": "97, 97, 97",
        "--neutral-300": "158, 158, 158",
        "--neutral-400": "189, 189, 189",
        "--neutral-500": "224, 224, 224",
        "--neutral-600": "117, 117, 117",
        "--neutral-700": "238, 238, 238",
        "--neutral-800": "245, 245, 245",
        "--neutral-900": "250, 250, 250",
      },
    };

    return {
      theme,
      themes,
    };
  },
};
</script>

<style lang="scss">
@import "~@/style/mapbox-gl.css";
@import "~@/style/fonts.css";
@import "~@/style/keyframes.css";

:root {
  --font-sans: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;
  --font-mono: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
}

* {
  transition: background-color 0.3s ease-in-out;
}

body {
  margin: 0;
  padding: 0;
}

#app-shell {
  font-family: var(--font-sans);
  color: rgb(var(--neutral-900));
}

#app {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 8px auto;
    font-family: var(--font-mono);
  }

  h1 {
    font-family: var(--font-sans);
    font-size: clamp(2rem, 4vw, 4rem);
  }
  h2 {
    font-family: var(--font-sans);
    font-size: clamp(1.4rem, 4vw, 3.2rem);
  }
  h3 {
    font-family: var(--font-sans);
    font-size: clamp(1rem, 4vw, 2rem);
  }
}
</style>
