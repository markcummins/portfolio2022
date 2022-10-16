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
        <h2>I build things for the web.</h2>
        <br />
        <Terminal v-if="terminalEnabled" />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import mapboxgl from "mapbox-gl";
import { ref, onMounted, inject, watch } from "vue";
import Terminal from "@/components/components/terminal.vue";

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

    const mapBox = ref(null);
    const debug = ref(false);

    const theme = inject("theme");

    watch(theme, (oldTheme, newTheme) => {
      if (mapBox.value) {
        mapBox.value.setStyle(
          newTheme === "light"
            ? "mapbox://styles/mark-cummins/cl8uav2s600hz16piya0nxfdk"
            : "mapbox://styles/mark-cummins/cl8ubr971006v17pvirsa457r"
        );

        gsap.fromTo(overlay.value, { opacity: 0 }, { opacity: 1, duration: 1 });
      }
    });

    const mapAnimate = () => {
      mapboxgl.accessToken =
        "pk.eyJ1IjoibWFyay1jdW1taW5zIiwiYSI6ImNsOGo2ZjByZzBndW8zbnM2bXJsNjgzMmIifQ.Ed1-0JG1lsPao6WVzAhCiw";

      mapBox.value = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mark-cummins/cl8uav2s600hz16piya0nxfdk?2",
        zoom: 1.5,
        center: [30, 50],
        projection: "globe",
        attributionControl: false,
      });

      mapBox.value.on("load", () => {
        mapBox.value.flyTo({
          center: [-7.90983, 52.91427],
          zoom: 8,
          speed: 0.32,
          curve: 3,
          essential: true,
        });
      });
    };

    const contentAnimate = () => {
      const tl = gsap.timeline();

      tl.fromTo(
        splash.value,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 0.8, ease: "Power2.in" },
        0.8
      );

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

    onMounted(() => {
      setTimeout(() => {
        if (debug.value === false) {
          mapAnimate();
        }
      }, 2000);

      contentAnimate();
    });

    return {
      map,
      splash,
      overlay,
      content,
      contentLhs,
      contentRhs,
      terminalEnabled,
    };
  },
};
</script>

<style>
/* .marker {
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-size: cover;
} */
/* body.theme-dark .marker {
  background-image: url("~@/assets/logo-dark.png");
} */
/* body.theme-light .marker {
  background-image: url("~@/assets/logo-light.png");
} */
</style>

<style scoped lang="scss">
.overlay {
  z-index: 10;
  height: 100vh;
  position: relative;
  background: rgb(var(--background));
}

.splash {
  position: absolute;
  opacity: 0;
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
    filter: drop-shadow(0 0 0.8rem rgba(var(--primary-500), .12));
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
      align-self: center;
      justify-self: flex-start;
    }
  }
}
</style>
