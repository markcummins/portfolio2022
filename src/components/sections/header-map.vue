<template>
  <div ref="overlay" class="overlay">
    <div ref="splash" class="splash">
      <img src="@/assets/logo-dark.svg" />
    </div>
    <div ref="map" id="map"></div>
    <div ref="content" class="content">
      <div class="content-lhs" ref="contentLhs">
        <img class="profile-picture" alt="Picture of Me" src="~@/assets/me.jpg" />
      </div>
      <div class="content-rhs" ref="contentRhs">
        <h3 class="font-mono font-labelle">Hello, my name is</h3>
        <h1 class="text-primary">Mark Cummins.</h1>
        <h2>
          I am a
          <u><i ref="dynamicH2"></i></u>
        </h2>
        <br />
        <Terminal v-if="terminalEnabled" />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import mapboxgl from "mapbox-gl";
import Terminal from "@/components/components/terminal.vue";

import { ref, onMounted, inject, watch } from "vue";

export default {
  name: "HeaderMap",

  components: {
    Terminal,
  },

  setup() {
    const map = ref(null);
    const splash = ref(null);
    const overlay = ref(null);
    const content = ref(null);
    const contentLhs = ref(null);
    const contentRhs = ref(null);
    const terminalEnabled = ref(false);
    const dynamicH2 = ref(false);

    const mapBox = ref(null);
    const theme = inject("theme");

    watch(theme, (oldTheme, newTheme) => {
      if (mapBox.value) {
        mapBox.value.setStyle(
          newTheme === "light"
            ? "mapbox://styles/mark-cummins/cl8uav2s600hz16piya0nxfdk?optimize=true"
            : "mapbox://styles/mark-cummins/cl8ubr971006v17pvirsa457r?optimize=true"
        );

        gsap.fromTo(overlay.value, { opacity: 0 }, { opacity: 1, duration: 1 });
      }
    });

    const animate = () => {
      mapboxgl.accessToken =
        "pk.eyJ1IjoibWFyay1jdW1taW5zIiwiYSI6ImNsOWJkMG54dTFpNDQzb212cXJtMmR0NTEifQ.eeIYxtj-pNruY2srd843bA";

      mapboxgl.accessToken =
        "pk.eyJ1IjoibWFyay1jdW1taW5zIiwiYSI6ImNsOWJkMWJvMTFoN2szb2xtNmN1eGYxY3UifQ.8Xt4GIj3S_XXdO-Ww0YyNw";

      mapBox.value = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mark-cummins/cl8uav2s600hz16piya0nxfdk?optimize=true",
        zoom: 1.5,
        minzoom: 3,
        maxzoom: 8,
        center: [-30, -50],
        projection: "globe",
        attributionControl: false,
      });

      mapBox.value.on("load", () => {
        h2Animate();
        contentAnimate();

        gsap.to(splash.value, {
          delay: 0.8,
          opacity: 0,
          duration: 0.3,
          ease: "Power2.in",
          onComplete: () => {
            mapBox.value.flyTo({
              center: [-7.90983, 52.91427],
              zoom: 8,
              speed: 0.8,
              curve: 0.32,
              essential: true,
            });
          },
        });
      });
    };

    const contentAnimate = () => {
      const tl = gsap.timeline();

      tl.to(splash.value, { opacity: 0, duration: 0.4, ease: "Power2.in" }, 2);
      tl.to(map.value, { opacity: 0.8, duration: 1, ease: "Power2.in" }, 2.4);

      tl.to(
        map.value,
        {
          opacity: 0.5,
          duration: 2,
          ease: "Power2.easeOut",
        },
        4
      );

      tl.fromTo(
        contentLhs.value,
        {
          opacity: 0,
          x: 80,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "Power2.easeOut",
        },
        4
      );

      tl.fromTo(
        contentRhs.value,
        {
          opacity: 0,
          x: -80,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "Power2.easeOut",
        },
        4.4
      );

      tl.call(
        () => {
          terminalEnabled.value = true;
        },
        null,
        4.4
      );
    };

    const h2Animate = () => {
      const tl = gsap.timeline({ delay: 2, repeat: -1, repeatDelay: 2 });

      const terms = [
        {
          mock: "4b7281a9 3a4574eb",
          real: "Software Engineer",
        },
        {
          mock: "Afb5abc 93cb34171",
          real: "Backend Developer",
        },
        {
          mock: "066da6e68",
          real: "Developer",
        },
        {
          mock: "C737dba6ff",
          real: "Programmer",
        },
        {
          mock: "1ebc737d Srgtgulwx",
          real: "Frontend Developer",
        },
        {
          mock: "Bya Xcgaabadz",
          real: "Web Developer",
        },
        {
          mock: "Bycxcqaacm E85vsgtkh",
          real: "JavaScript Developer",
        },
        {
          mock: "Bcc Aaaaibavc",
          real: "PHP Developer",
        },
        {
          mock: "Bydbcqaa Akhbii",
          real: "Software Tester",
        },
        {
          mock: "Byah-Qaaam Ckobdyqkv",
          real: "Full-Stack Developer",
        },
        {
          mock: "Byahdq Aamjckobd",
          real: "DevOps Developer",
        },
        {
          mock: "Bycxcqaa",
          real: "Designer",
        },
        {
          mock: "Gv2pl",
          real: "Coder",
        },
      ];

      terms.forEach((term) => {
        tl.to(dynamicH2.value, {
          delay: 3,
          duration: 0.2,
          text: { value: term.mock, delimiter: "" },
          ease: "none",
        });
        tl.to(dynamicH2.value, {
          duration: 1,
          text: { value: term.real, delimiter: "" },
          ease: "none",
        });
      });
    };

    onMounted(() => {
      gsap.registerPlugin(TextPlugin);
      animate();
    });

    return {
      map,
      splash,
      overlay,
      content,
      dynamicH2,
      contentLhs,
      contentRhs,
      terminalEnabled,
    };
  },
};
</script>

<style scoped lang="scss">
.overlay {
  z-index: 10;
  height: 100vh;
  position: relative;
  background: rgb(var(--background));
}

.splash {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;
  }
}

#map {
  opacity: 0;
  z-index: 20;
  position: absolute;
  width: 100%;
  height: 100vh;
}

.content {
  opacity: 1;
  z-index: 30;
  width: 100%;
  height: 100vh;
  padding: 0 1rem;
  position: absolute;

  display: grid;
  row-gap: 4vh;
  grid-template-rows: 2fr 4fr;
  grid-template-columns: 1fr;

  .content-lhs {
    opacity: 0;
    justify-self: center;
    align-self: flex-end;
  }
  .content-rhs {
    opacity: 0;
    align-self: flex-start;
    justify-self: center;
  }

  .profile-picture {
    max-width: 12rem;
    border-radius: 50%;
    filter: drop-shadow(0 0 0.8rem rgba(var(--primary-500), 0.12));
  }
}

@media (min-width: 768px) {
  .content {
    row-gap: 0;
    column-gap: 4vw;
    align-items: center;
    align-self: center;

    grid-template-rows: unset;
    grid-template-columns: 2fr 4fr;

    .content-lhs {
      text-align: right;
      justify-self: flex-end;
      align-self: center;
    }
    .content-rhs {
      min-width: 32rem;
      align-self: center;
      justify-self: flex-start;
    }
  }
}
</style>
