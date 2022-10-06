<template>
  <div ref="overlay" class="overlay">
    <div ref="map" id="map"></div>
    <div ref="content" class="content">
      <div class="content-lhs" ref="contentLhs">
        <img class="profile-picture" alt="Picture of Me" src="~@/assets/me.jpg" />
      </div>
      <div class="content-rhs" ref="contentRhs">
        <p
          class="font-mono text-primary font-labelle"
          style="font-size: 1.6rem; line-height: 0.8rem"
        >
          Hello, my name is
        </p>
        <h1 class="text-primary">Mark Cummins.</h1>
        <h2>I build things for the web.</h2>
        <br />
        <Terminal v-if="terminalEnabled" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, inject } from "vue";

import { gsap } from "gsap";

import mapboxgl from "mapbox-gl";

import Terminal from "@/components/components/terminal.vue";

export default {
  name: "HeaderMap",

  components: {
    Terminal,
  },

  setup() {
    const map = ref(null);
    const overlay = ref(null);
    const content = ref(null);
    const contentLhs = ref(null);
    const contentRhs = ref(null);
    const terminalEnabled = ref(false);

    const mapBox = ref(null);
    const debug = ref(true);

    const theme = inject("theme");

    const addMapMarker = () => {
      const el = document.createElement("div");
      el.className = "marker";

      new mapboxgl.Marker(el).setLngLat([-7.90983, 52.91427]).addTo(mapBox.value);
    };

    const mapAnimate = () => {
      mapboxgl.accessToken =
        "pk.eyJ1IjoibWFyay1jdW1taW5zIiwiYSI6ImNsOGo2ZjByZzBndW8zbnM2bXJsNjgzMmIifQ.Ed1-0JG1lsPao6WVzAhCiw";

      mapBox.value = new mapboxgl.Map({
        container: "map",
        style:
          theme.value === "dark"
            ? "mapbox://styles/mark-cummins/cl8uav2s600hz16piya0nxfdk"
            : "mapbox://styles/mark-cummins/cl8ubr971006v17pvirsa457r",
        zoom: 1.5,
        center: [30, 50],
        projection: "globe",
        attributionControl: false,
      });

      mapBox.value.on("load", () => {
        mapBox.value.setFog({
          range: [0.8, 8],
          color: "#484848",
          "horizon-blend": 0.5,
          "high-color": "#191A1A",
          "space-color": "#2A2A2A",
          "star-intensity": 0.15,
        });

        addMapMarker();
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

      tl.to(map.value, { opacity: 1, duration: 2, delay: 0.2, ease: "Power2.easeOut" });
      tl.to(content.value, {
        opacity: 1,
        duration: 2,
        delay: 1,
        ease: "Power2.easeOut",
      });

      tl.call(
        () => {
          terminalEnabled.value = true;
        },
        null,
        3
      );

      tl.from(
        contentLhs.value,
        {
          opacity: 0,
          x: 80,
          delay: 0.6,
          duration: 2,
          ease: "Power2.easeOut",
        },
        3
      );

      tl.from(
        contentRhs.value,
        {
          opacity: 0,
          x: -80,
          duration: 2,
          ease: "Power2.easeOut",
        },
        3
      );

      tl.play();
    };

    onMounted(() => {
      setTimeout(() => {
        if (debug.value === false) {
          mapAnimate();
        }

        contentAnimate();
      }, 2000);
    });

    return {
      map,
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
.marker {
  background-image: url("~@/assets/logo.png");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>

<style scoped lang="scss">
.overlay {
  z-index: 10;
  height: 100vh;
  position: relative;
  background: rgb(var(--background));
}
#map {
  opacity: 0;
  z-index: 20;
  position: absolute;
  width: 100%;
  height: 100%;
  height: 100vh;
}
.content {
  z-index: 30;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(var(--background), 0.85);

  opacity: 1;
  display: grid;
  column-gap: 4vw;
  align-items: center;
  grid-template-columns: 2fr 4fr;

  .content-lhs {
    text-align: right;
    justify-self: end;
  }
  .content-rhs {
    justify-self: start;
  }

  .profile-picture {
    border-radius: 50%;
    max-width: 12rem;
  }
}
</style>
