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
        "--background": "250, 250, 250",
        "--foreground": "55, 55, 55",
        // Primary
        "--primary-50": "241, 240, 250",
        "--primary-100": "220, 217, 243",
        "--primary-200": "197, 192, 235",
        "--primary-300": "174, 167, 227",
        "--primary-400": "156, 148, 221",
        "--primary-500": "139, 129, 215",
        "--primary-600": "131, 121, 211",
        "--primary-700": "120, 110, 205",
        "--primary-800": "110, 100, 199",
        "--primary-900": "91, 81, 190",
      },
      dark: {
        "--background": "11, 11, 11",
        "--foreground": "250, 250, 250",
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
  --font-labelle: "La Belle Aurore", "cursive";
}

* {
  transition: background-color 0.3s ease-in-out;
}

body {
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
}

@media (max-width: 480px) {
  body {
    font-size: 1.2rem;
  }
}

#app-shell {
  font-family: var(--font-sans);
  color: rgb(var(--foreground));
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

  .font-labelle {
    font-family: var(--font-labelle);
  }

  .text-background {
    color: rgb(var(--background));
  }
  .text-foreground {
    color: rgb(var(--foreground));
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

  a.btn {
    line-height: 1;
    font-size: 1rem;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    border-radius: 0.2rem;
    padding: 0.8rem 1.2rem;
    font-family: var(--font-mono);
    color: rgb(var(--foreground));
    background-color: transparent;
    transition: background-color 0.2s ease;
    border: 1px solid rgb(var(--foreground));
  }
  a.btn:hover {
    outline: none;
    color: rgb(var(--background));
    background-color: rgb(var(--foreground));
  }

  a.btn-primary {
    color: rgb(var(--primary-500));
    border: 1px solid rgb(var(--primary-500));
  }
  a.btn-primary:hover {
    color: rgb(var(--background));
    background-color: rgb(var(--primary-500));
  }
}
</style>
