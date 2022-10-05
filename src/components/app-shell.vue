<template>
  <div id="app-shell" :style="{ ...themes[theme] }">
    <slot />
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
        // Neutral
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
        // Primary
        "--primary-50": "241, 248, 252",
        "--primary-100": "220, 238, 248",
        "--primary-200": "197, 227, 244",
        "--primary-300": "173, 215, 239",
        "--primary-400": "156, 207, 235",
        "--primary-500": "138, 198, 232",
        "--primary-600": "130, 192, 229",
        "--primary-700": "119, 185, 226",
        "--primary-800": "109, 177, 222",
        "--primary-900": "90, 164, 216",
      },
      dark: {
        // Neutral
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
        // Primary
        "--primary-50": "241, 248, 252",
        "--primary-100": "220, 238, 248",
        "--primary-200": "197, 227, 244",
        "--primary-300": "173, 215, 239",
        "--primary-400": "156, 207, 235",
        "--primary-500": "138, 198, 232",
        "--primary-600": "130, 192, 229",
        "--primary-700": "119, 185, 226",
        "--primary-800": "109, 177, 222",
        "--primary-900": "90, 164, 216",
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
  font-size: 1.15rem;
}

@media (max-width: 480px) {
  body {
    font-size: 1.2rem;
  }
}

#app-shell {
  font-family: var(--font-sans);
  color: rgb(var(--neutral-500));
}

#app {
  h1,
  h2,
  h3 {
    margin: 8px auto;
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

  .font-sans {
    font-family: var(--font-sans);
  }

  .font-mono {
    font-family: var(--font-mono);
  }

  .text-primary-50 {
    color: rgb(var(--primary-50));
  }
  .text-primary-100 {
    color: rgb(var(--primary-100));
  }
  .text-primary-200 {
    color: rgb(var(--primary-200));
  }
  .text-primary-300 {
    color: rgb(var(--primary-300));
  }
  .text-primary-400 {
    color: rgb(var(--primary-400));
  }
  .text-primary,
  .text-primary-500 {
    color: rgb(var(--primary-500));
  }
  .text-primary-600 {
    color: rgb(var(--primary-600));
  }
  .text-primary-700 {
    color: rgb(var(--primary-700));
  }
  .text-primary-800 {
    color: rgb(var(--primary-800));
  }
  .text-primary-900 {
    color: rgb(var(--primary-900));
  }
}
</style>
